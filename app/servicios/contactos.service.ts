import { Injectable } from "@angular/core";

import { Contacto } from "../entidades/contacto";

// Con el decorador 'Injectable' marcamos una clase para que
// se comporte como servicio.
@Injectable()
export class ContactosService {

    obtenerContactos(): Contacto[] {
        return [
            Contacto.nuevoDesdeJson({
                id: 1,
                nombre: "Steve",
                apellido: "Jobs",
                email: "steve.jobs@apple.com",
                telefono: "555123456",
                facebook: "Steave",
                twitter: "Stve",
                avatar : ""
            }),
            Contacto.nuevoDesdeJson({
                id: 2,
                nombre: "Bill",
                apellido: "Gates",
                email: "bill.gates@microsoft.com",
                telefono: "555987654",
                facebook: "Gates",
                twitter: "billgates",
                avatar: ""
            }),
            Contacto.nuevoDesdeJson({
                id: 3,
                nombre: "Elon",
                apellido: "Musk",
                email: "elon.musk@tesla.com",
                telefono: "555675432",
                facebook: "elon",
                twitter: "elon",
                avatar: ""
            })
        ];
    }
}