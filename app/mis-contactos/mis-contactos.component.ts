import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Contacto } from "../entidades/contacto";
import { ContactosService } from "../servicios/contactos.service";

@Component({
    templateUrl: "./app/mis-contactos/mis-contactos.component.html"
})
export class MisContactosComponent implements OnInit {
    
    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    // Necesitamos inyectar como dependencia 'ActivatedRoute' para acceder a los
    // datos contextuales de la ruta que se está navegando.
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _contactosService: ContactosService) { }

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

    // Avisamos al usuario de la eliminación del contacto.
    eliminarContacto(contacto: Contacto): void {
        // Preguntamos.
        if (confirm(`¿Estás seguro de eliminar a ${contacto.nombre} ${contacto.apellidos}?`)) {
            // Eliminamos el contacto.
            this._contactosService
                .eliminarContacto(contacto)
                .subscribe(() => {
                    // Filtramos la lista y nos quedamos con todos los contactos que no sean el eliminado.
                    this.listaContactos = this.listaContactos.filter((c: Contacto) => c.id !== contacto.id);
                    // Ocultamos el componente de detalles.
                    this.contactoSeleccionado = null;
                });
        }
        else {
            console.log("No, déjame pensarlo.");
        }
    }
}