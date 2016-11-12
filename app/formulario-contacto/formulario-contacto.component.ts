import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Contacto } from "../entidades/contacto";

@Component({
    selector: "formulario-contacto",
    templateUrl: "./app/formulario-contacto/formulario-contacto.component.html",
    styleUrls: ["./app/formulario-contacto/formulario-contacto.component.css"]
})
export class FormularioContactoComponent {

    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    // Notificamos el contacto obtenido a partir de los datos del formulario.
    notificarContacto(formulario: FormGroup): void {
        let contacto: Contacto = Contacto.nuevoDesdeJson(formulario.value);
        this.formularioAceptado.emit(contacto);
    }
}