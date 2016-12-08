import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Contacto } from "../entidades/contacto";
import { Observable } from "rxjs/Observable";
import { ContactosService } from "./contactos.service";

// Un Resolve no es mas que un servicio que implementa la interfaz Resolve
@Injectable()
export class ContactosResolve implements Resolve<Contacto[]>{


    constructor(private _contactosService: ContactosService){

    }
    // La funcion resolve tiene acceso a la ruta con "ActivatedRouteSnapshot". Ademas debe
    // retornar un Observable o una promesa del dato deseado.
    resolve(route: ActivatedRouteSnapshot): Observable<Contacto[]>{
        return this._contactosService.obtenerContactos();
    }

}