import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Contacto } from "../entidades/contacto";

@Component({
    selector: "lista-contactos",
    templateUrl: "./app/lista-contactos/lista-contactos.component.html",
    styleUrls: ["./app/lista-contactos/lista-contactos.component.css"]
})
export class ListaContactosComponent {

    @Input() contactos: Contacto[];
    @Output() seleccionado: EventEmitter<Contacto> = new EventEmitter();

    // Notificamos la selección del usuario indicado.
    notificarContactoSeleccionado(contacto: Contacto): void {
        this.seleccionado.emit(contacto);
    }
}