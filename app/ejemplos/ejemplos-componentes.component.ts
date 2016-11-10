import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "ejemplos-componentes",
    templateUrl: "./app/ejemplos/ejemplos-componentes.component.html"
})
export class EjemplosComponentesComponent {

    // Función que maneja el evento 'encima' de los componentes 'CajaComponent' que
    // hemos pintado en el template.
    escribeMensaje(mensaje) {
        console.log(mensaje);
    }
}

@Component({
    selector: "caja",
    template: `
        <div
            [style.backgroundColor]="color"
            (mouseenter)="notificar()"></div>
    `,
    styles: [`div {
        width: 100px;
        height: 100px;
        margin:4px;
    }`]
})
export class CajaComponent {
    
    // Decorando un atributo con 'Input' lo exponemos como enlace a entrada de datos.
    @Input() color: string = "red";

    // Decorando un atributo con 'Output' lo exponemos como enlace a salida de datos.
    // Este enlace de salida viene dado en forma de evento y para ello nos apoyamos en
    // la clase 'EventEmitter'; ella será la encargada de emitir los eventos que
    // que consideremos oportunos.
    @Output() encima: EventEmitter<string> = new EventEmitter();

    notificar() {

        // Para emitir un evento hacemos uso de la función 'emit' de nuestro
        // EventEmitter. Como parámetro indicamos el dato a notificar, respetando
        // siempre el tipo que hayamos indicado en su definición.
        this.encima.emit(`El color de la caja es ${this.color}`);
    }
}