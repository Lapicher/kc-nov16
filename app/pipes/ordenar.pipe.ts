import { Pipe, PipeTransform } from "@angular/core";

import { Contacto } from "../entidades/contacto";

@Pipe({ name: "Ordenar" })
export class OrdenarPipe implements PipeTransform {

    // Con 'transform()' hacemos la transformación del dato de origen. Este dato NO se
    // altera, solo se utiliza como fuente de datos.
    transform(contactos: Contacto[], orden: string) {

        // Ordenamos de manera ascendente.
        if (orden === "asc") {

            contactos.sort((contacto1: Contacto, contacto2: Contacto): number => {

                let resultado;
                let nombreCompleto1: string = `${contacto1.nombre} ${contacto1.apellidos}`;
                let nombreCompleto2: string = `${contacto2.nombre} ${contacto2.apellidos}`;

                // Si el nombre del contacto 1 va primero.
                if (nombreCompleto1 > nombreCompleto2) {
                    resultado = 1;
                }
                // Si el nombre del contacto 2 va primero.
                else if (nombreCompleto1 <= nombreCompleto2) {
                    resultado = -1;
                }
                // Si se ordenan igual.
                else {
                    resultado = 0;
                }

                return resultado;
            });
        }

        // Ordenamos de manera descendente.
        else {

            contactos.sort((contacto1: Contacto, contacto2: Contacto): number => {

                let resultado;
                let nombreCompleto1: string = `${contacto1.nombre} ${contacto1.apellidos}`;
                let nombreCompleto2: string = `${contacto2.nombre} ${contacto2.apellidos}`;

                // Si el nombre del contacto 2 va primero.
                if (nombreCompleto2 > nombreCompleto1) {
                    resultado = 1;
                }
                // Si el nombre del contacto 1 va primero.
                else if (nombreCompleto2 <= nombreCompleto1) {
                    resultado = -1;
                }
                // Si se ordenan igual.
                else {
                    resultado = 0;
                }

                return resultado;
            });
        }

        return contactos;
    }
}