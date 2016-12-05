import {Component, OnInit} from "@angular/core";
import { Contacto } from "../entidades/contacto";
import { ContactosService } from "../servicios/contactos.service";

@Component({
    template: `
        <!-- Colección de contactos -->
        <lista-contactos
            [contactos]="listaContactos"
            (seleccionado)="mostrarDetalles($event)"></lista-contactos>

        <!-- Detalles del contacto seleccionado -->
        <detalles-contacto 
            [contacto]="contactoSeleccionado"
            (verFacebook)="navegarRuta($event)"
            (verTwitter)="navegarRuta($event)"
            >
        </detalles-contacto>
    `

})
export class MisContactosComponent implements OnInit {
    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    // Usando el modificador de acceso en un parámetro del constructor, hacemos
    // que TypeScript lo añada como atributo a la instancia que se crea. Así es
    // como hacemos la inyección de dependencias en Angular.
    constructor(private _contactosService: ContactosService) { }

    ngOnInit(): void {

        // Obtenemos los contactos apoyándonos en el servicio.
        this._contactosService.obtenerContactos()
                              .subscribe(contactos => this.listaContactos = contactos);
    }

    mostrarDetalles(contacto: Contacto):void {
        this.contactoSeleccionado = contacto;
    }

    navegarRuta(ruta: string){
        window.open(ruta, "_blank");
    }
}