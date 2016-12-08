import {Component, OnInit} from "@angular/core";
import { Contacto } from "../entidades/contacto";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "./app/mis-contactos/mis-contactos.component.html"  
})
export class MisContactosComponent implements OnInit {
    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    // Usando el modificador de acceso en un parámetro del constructor, hacemos
    // que TypeScript lo añada como atributo a la instancia que se crea. Así es
    // como hacemos la inyección de dependencias en Angular.
    //constructor(private _contactosService: ContactosService) { }
    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {

        // Obtenemos los contactos apoyándonos en el servicio.
        this._activatedRoute.data.forEach((data: { contactos: Contacto[]})=>{
            this.listaContactos = data.contactos;
        });
    }

    mostrarDetalles(contacto: Contacto):void {
        this.contactoSeleccionado = contacto;
    }

    navegarRuta(ruta: string){
        window.open(ruta, "_blank");
    }
}