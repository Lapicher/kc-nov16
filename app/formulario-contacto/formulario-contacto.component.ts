import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Contacto } from "../entidades/contacto";
import { ContactosService } from '../servicios/contactos.service';

@Component({
    selector: "formulario-contacto",
    templateUrl: "./app/formulario-contacto/formulario-contacto.component.html",
    styleUrls: ["./app/formulario-contacto/formulario-contacto.component.css"]
})
export class FormularioContactoComponent implements OnInit{
 
    rutaAvatar: string = "";

    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    constructor( private _contactoService: ContactosService){}
    ngOnInit(): void {
        this._contactoService.generarRutaAvatar()
                             .subscribe(ruta => this.rutaAvatar = ruta);
    }

    notificarContacto(formulario: FormGroup): void{
        let contacto: Contacto = Contacto.nuevoDesdeJson(formulario.value);
        contacto.avatar= this.rutaAvatar;
        this.formularioAceptado.emit(contacto);
    }
    
}