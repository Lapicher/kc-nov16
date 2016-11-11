// En el documento 'app.component.ts' definimos el componente raíz de nuestra app.
import { Component, OnInit } from '@angular/core';

import { Contacto } from "./entidades/contacto";
import { ContactosService } from "./servicios/contactos.service";

// Decoramos la clase 'AppComponent' con el decorador 'Component' para que ésta se
// comporte como un componente. Es necesario indicar ciertos metadatos.
@Component({
    selector: 'mensaje',
    templateUrl: './app/app.component.html',
})
export class AppComponent implements OnInit {

    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    // Usando el modificador de acceso en un parámetro del constructor, hacemos
    // que TypeScript lo añada como atributo a la instancia que se crea. Así es
    // como hacemos la inyección de dependencias en Angular.
    constructor(private _contactosService: ContactosService) { }

    ngOnInit(): void {

        // Obtenemos los contactos apoyándonos en el servicio.
        this.listaContactos = this._contactosService.obtenerContactos();
    }

    mostrarDetalles(contacto: Contacto):void {
        this.contactoSeleccionado = contacto;
    }

    navegarRuta(ruta: string): void {
        window.open(ruta, "_blank");
    }
}
