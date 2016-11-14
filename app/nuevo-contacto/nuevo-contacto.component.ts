import { Component } from "@angular/core";

import { Contacto } from "../entidades/contacto";
import { ContactosService } from "../servicios/contactos.service";

@Component({
    template: `
        <!-- Formulario de alta de contactos -->
        <formulario-contacto (formularioAceptado)="guardarContacto($event)"></formulario-contacto>
    `
})
export class NuevoContactoComponent {
    
    constructor(private _contactosService: ContactosService) { }

    // Almacenamos el contacto indicado.
    guardarContacto(contacto: Contacto): void {
        this._contactosService.guardarContacto(contacto)
                              .subscribe(contacto => alert("¡Contacto creado!"));
    }
}