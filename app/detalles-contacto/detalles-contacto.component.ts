import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Contacto } from "../entidades/contacto";

@Component({
    selector: "detalles-contacto",
    templateUrl: "./app/detalles-contacto/detalles-contacto.component.html",
    styleUrls: ["./app/detalles-contacto/detalles-contacto.component.css"]
})
export class DetallesContactoComponent {
    
    @Input() contacto: Contacto;
    @Output() verFacebook : EventEmitter<string> = new EventEmitter();
    @Output() verTwitter : EventEmitter<string> = new EventEmitter();

    notificarFacebook(): void {
        this.verFacebook.emit(this.contacto.generarRutaFacebook());
    }

    notificarTwitter(): void {
        this.verTwitter.emit(this.contacto.generarRutaTwitter());
    }
}