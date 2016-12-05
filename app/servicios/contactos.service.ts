import { Injectable } from "@angular/core";
import { Http } from "@angular/http"; 
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"; 

import { Contacto } from "../entidades/contacto";

// Con el decorador 'Injectable' marcamos una clase para que
// se comporte como servicio.
@Injectable()
export class ContactosService {


    constructor(private _http: Http){ }
    
    // obtenemos la lista de contactos almacenados
    obtenerContactos(): Observable<Contacto[]> {
        // conectar con el servidor para obtener los contactos
        return this._http
                    .get("http://localhost:3004/contactos")
                    .map((respuesta) => {
                        //obtenemos el cuerpo de la respuesta en formato JSON.
                        let json = respuesta.json();
                        let contactos: Contacto[] = [];
                        // Iteramos por los objetos del JSON y se meten a la collecion de contactos
                        json.forEach((contacto)=>{
                            contactos.push(Contacto.nuevoDesdeJson(contacto));
                        });
                        // retornamos la lista de contactos.
                        return contactos;
                    });
    }

    // Guardamos el contacto indicado en la lista
    guardarContacto(contacto: Contacto): Observable<Contacto>{
        // guardamos el contacto en el servidor.
        return this._http
                    .post("http://localhost:3004/contactos", contacto)
                    .map((respuesta) => {

                        let json = respuesta.json();
                        return Contacto.nuevoDesdeJson(json)
                    })
    }
}