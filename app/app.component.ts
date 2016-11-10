// En el documento 'app.component.ts' definimos el componente raíz de nuestra app.
import { Component } from '@angular/core';

import { Contacto } from "./entidades/contacto";

// Decoramos la clase 'AppComponent' con el decorador 'Component' para que ésta se
// comporte como un componente. Es necesario indicar ciertos metadatos.
@Component({
    selector: 'mensaje',
    templateUrl: './app/app.component.html',
})
export class AppComponent {

    listaContactos: Contacto[] = [
        {
            nombre: "Steve Jobs",
            email: "steve.jobs@apple.com",
            telefono: "555123456"
        },
        {
            nombre: "Bill Gates",
            email: "bill.gates@microsoft.com",
            telefono: "555987654"
        },
        {
            nombre: "Elon Musk",
            email: "elon.musk@tesla.com",
            telefono: "555675432"
        }
    ];
}
