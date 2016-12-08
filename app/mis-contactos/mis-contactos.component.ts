import {Component, OnInit} from "@angular/core";
import { Contacto } from "../entidades/contacto";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "./app/mis-contactos/mis-contactos.component.html"  
})
export class MisContactosComponent implements OnInit {
    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    // Ncesitamos inyectar como dependencia ActivatedRoute para acceder a los datos 
    // contextuales de la ruta que se esta navegando.
    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {

        // a traves de la propiedad "data" de la ruta tenemos acceso a los datos
        // contextuales de la ruta que se esta navegando.
        this._activatedRoute.data.forEach((data: { contactos: Contacto[]})=>{
            this.listaContactos = data.contactos;
        });
    }

    // Pasamos el contacto indicado al componente de detalles.
    mostrarDetalles(contacto: Contacto):void {
        this.contactoSeleccionado = contacto;
    }

    // Abrimos una pestaña del navegador con la ruta indicada.
    navegarRuta(ruta: string){
        window.open(ruta, "_blank");
    }
}