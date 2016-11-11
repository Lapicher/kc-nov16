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
                nombre: "Tim",
                apellidos: "Cook",
                email: "tim.cook@apple.com",
                telefono: "555123456",
                twitter: "tim_cook",
                facebook: "",
                avatar: ""
            }),
            Contacto.nuevoDesdeJson({
                id: 2,
                nombre: "Bill",
                apellidos: "Gates",
                email: "bill.gates@microsoft.com",
                telefono: "555987654",
                twitter: "BillGates",
                facebook: "",
                avatar: ""
            }),
            Contacto.nuevoDesdeJson({
                id: 3,
                nombre: "Elon",
                apellidos: "Musk",
                email: "elon.musk@tesla.com",
                telefono: "555675432",
                twitter: "elonmusk",
                facebook: "",
                avatar: ""
            })
        ];
    }
}