import { Component, Inject, OnInit } from "@angular/core";
import { Servicio1 } from "./ejemplos-inyeccion-servicio1.service";
import { Servicio2 } from "./ejemplos-inyeccion-servicio2.service";
import { Servicio3 } from "./ejemplos-inyeccion-servicio3.service";
import { MiSuperValor } from "./ejemplos-inyeccion-value";

@Component({
    selector: "ejemplos-inyeccion",
    templateUrl: "./app/ejemplos/ejemplos-inyeccion.component.html"
})
export class EjemplosInyeccionComponent implements OnInit {

    mensaje1: string;
    mensaje2: string;
    mensaje3: string;
    mensaje4: string;

    constructor(
        private _servicio1: Servicio1,
        private _servicio2: Servicio2,
        private _servicio3: Servicio3,
        @Inject(MiSuperValor) private _valor) { }

    ngOnInit(): void {
        this.mensaje1 = this._servicio1.obtenerMensaje();
        this.mensaje2 = this._servicio2.obtenerMensaje();
        this.mensaje3 = this._servicio3.obtenerMensaje();
        this.mensaje4 = this._valor;
    }
}
