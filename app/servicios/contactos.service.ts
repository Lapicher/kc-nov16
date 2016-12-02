import { Injectable } from "@angular/core";

import { Contacto } from "../entidades/contacto";

// Con el decorador 'Injectable' marcamos una clase para que
// se comporte como servicio.
@Injectable()
export class ContactosService {

    // lista de contactos
    private _contactos: Contacto[]= [
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
    // obtenemos la lista de contactos almacenados
    obtenerContactos(): Contacto[] {
        return this._contactos;
    }

    // Guardamos el contacto indicado en la lista
    guardarContacto(contacto: Contacto): Contacto{
        // generamos un nuevo id y lo asignamos al nuevo contacto
        let id = this._contactos.length + 1;
        contacto.id = id;
        // añadimos el contacto a la coleccion
        this._contactos.push(contacto);
        // se retorna el contacto actualizado con el nuevo id.
        return contacto; 
    }

}