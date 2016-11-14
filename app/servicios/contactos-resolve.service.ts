import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { Contacto } from "../entidades/contacto";
import { ContactosService } from "./contactos.service";

// Un 'Resolve' no es más que un servicio que implementa la interfaz 'Resolve'.
@Injectable()
export class ContactosResolve implements Resolve<Contacto[]>{

    constructor(private _contactosService: ContactosService) { }

    // La función 'resolve' tiene acceso a la ruta con 'ActivatedRouteSnapshot'. Además,
    // debe retornar un 'Observable' o una 'Promise' del dato deseado.
    resolve(route: ActivatedRouteSnapshot): Observable<Contacto[]> {
        return this._contactosService.obtenerContactos();
    }
}