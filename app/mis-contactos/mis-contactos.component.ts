import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Contacto } from "../entidades/contacto";

@Component({
    templateUrl: "./app/mis-contactos/mis-contactos.component.html"
})
export class MisContactosComponent implements OnInit {
    
    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    // Necesitamos inyectar como dependencia 'ActivatedRoute' para acceder a los
    // datos contextuales de la ruta que se está navegando.
    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {

        // A través de la propiedad 'data' de la ruta tenemos acceso a los
        // datos que se hayan resuelto durante la navegación.
        this._activatedRoute.data.forEach((data: { contactos: Contacto[] }) => {
            this.listaContactos = data.contactos;
        });
    }

    // Pasamos el contacto indicado al componente de detalles.
    mostrarDetalles(contacto: Contacto):void {
        this.contactoSeleccionado = contacto;
    }

    // Abrimos una pestaña del navegador con la ruta indicada.
    navegarRuta(ruta: string): void {
        window.open(ruta, "_blank");
    }
}