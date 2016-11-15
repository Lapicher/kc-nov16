import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";
import { Jsonp, URLSearchParams, RequestOptions, Response } from "@angular/http";

import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "ejemplos-observables",
    template: ""
})
export class EjemplosObservablesComponent {

    private _miObservable$: Observable<any> = Observable.create((observador: Observer<any>) => {

        // Enviamos datos con 'next()'.
        observador.next("Buenas noches KeepCoders");
        observador.next(123456);
        observador.next(true);

        // Notificamos un error con 'error()'.
        observador.error("¡¡ Cagada monumental !!");

        // Indicamos que hemos terminado.
        observador.complete();
    });

    constructor() {

        this._miObservable$.subscribe(

            // Como primer manejador indicamos aquel que se encargará de los datos enviados con 'next()'.
            (dato) => {
                console.log(`Dato enviado con next: ${dato}`);
            },

            // Como segundo manejador indicamos aquel que se encargará de los errores notificados con 'error()'.
            (error) => {
                console.log(`Dato enviado con error: ${error}`);
            },

            // Como tercer manejador indicamos aquel que se encargará de responder a 'complete()'.
            () => {
                console.log(`¡He terminado!`);
            }
        );
    }
}

@Component({
    selector: "ejemplos-observables-wikipedia",
    template: `
        <div>
            <label for="wikipedia">Buscar en Wikipedia</label>
            <input id="wikipedia" (input)="buscarEnWikipedia($event)">
            <ul>
                <li *ngFor="let resultado of resultados">
                    {{ resultado }}
                </li>
            </ul>
        </div>
    `
})
export class EjemplosObservablesWikipediaComponent implements OnDestroy {

    resultados: string[] = [];
    
    // Creamos un Subject que se encarga de gestionar el flujo de
    // datos correspondiente al texto que se introduce en el input.
    private _flujoDeDatosCajaTexto: Subject<string> = new Subject();

    // Creamos una Subscription para controlar la desuscripción
    // del flujo de datos al abandonar el componente.
    private _suscripcionCajaTexto: Subscription;

    constructor(private _jsonp: Jsonp) {

        // Nos suscribimos al flujo de datos.
        this._suscripcionCajaTexto = this._flujoDeDatosCajaTexto
            
            // Con 'debounceTime()' hacemos una pausa previa a continuar el flujo.
            .debounceTime(500)

            // Con 'distinctUntilChanged()' evitamos notificar un valor idéntico al anterior.
            .distinctUntilChanged()

            // Con 'switchMap()' cambiamos un flujo de datos por otro.
            .switchMap((termino: string) => {
                console.log(`switchMap: ${termino}`);
                return this.hacerBusqueda(termino);
            })

            // Con 'subscribe()' invocamos el flujo de datos.
            .subscribe((resultados: string[]) => {
                this.resultados = resultados
            });
    }

    ngOnDestroy(): void {
        
        // Nos desuscribimos del flujo de datos al abandonar el componente.
        this._suscripcionCajaTexto.unsubscribe();
    }

    buscarEnWikipedia(evento: KeyboardEvent): void {
        
        // Notificamos en el flujo de datos el texto introducido en el input.
        let termino = (evento.target as HTMLInputElement).value;
        console.log(`buscarEnWikipedia: ${termino}`);
        this._flujoDeDatosCajaTexto.next(termino);
    }

    // Hacemos la búsqueda en Wikipedia usando JSONP.
    hacerBusqueda(termino: string): Observable<string[]> {

        console.log(`hacerBusqueda: ${termino}`);
        
        let parametros: URLSearchParams = new URLSearchParams();
        parametros.set("search", termino);
        parametros.set("action", "opensearch");
        parametros.set("format", "json");
        parametros.set("callback", "JSONP_CALLBACK");

        let opciones: RequestOptions = new RequestOptions();
        opciones.search = parametros;

        return this._jsonp
                   .get("http://es.wikipedia.org/w/api.php", opciones)
                   .map((respuesta: Response) => {
                       return respuesta.json()[1];
                   });
    }
}