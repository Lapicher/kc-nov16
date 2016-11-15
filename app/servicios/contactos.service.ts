import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Contacto } from "../entidades/contacto";
import { DireccionServidor } from '../configuracion/rutas';

// Con el decorador 'Injectable' marcamos una clase para que
// se comporte como servicio.
@Injectable()
export class ContactosService {

    // Inyectamos Http como dependencia.
    constructor(
        private _http: Http,
        @Inject(DireccionServidor) private _direccionServidor) { }

    // Obtenemos la lista de contactos almacenados.
    obtenerContactos(): Observable<Contacto[]> {
        return this._http
                   .get(`${this._direccionServidor}/contactos`)
                   .map((respuesta: Response) => {
                       // Creamos una colección de objetos Contacto vacía.
                       let contactos: Contacto[] = [];
                       // Obtenemos el cuerpo de la respuesta en formato JSON.
                       let json: any[] = respuesta.json();
                       // Iteramos por los objetos del JSON.
                       json.forEach((contacto) => {
                           // Por cada uno de ellos, creamos una instancia de Contacto.
                           contactos.push(Contacto.nuevoDesdeJson(contacto));
                       });
                       // Retornamos la colección.
                       return contactos;
                   });
    }

    // Guardamos el contacto indicado en servidor.
    guardarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
                   .post(`${this._direccionServidor}/contactos`, contacto)
                   .map((respuesta: Response) => {
                       // Obtenemos el cuerpo de la respuesta en formato JSON.
                       let json = respuesta.json();
                       // Creamos una instancia de Contacto.
                       return Contacto.nuevoDesdeJson(json);
                   });
    }

    // Editamos el contacto indicado en servidor.
    editarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
                   .put(`${this._direccionServidor}/contactos/${contacto.id}`, contacto)
                   .map((respuesta: Response) => {
                       // Obtenemos el cuerpo de la respuesta en formato JSON.
                       let json = respuesta.json();
                       // Creamos una instancia de Contacto.
                       return Contacto.nuevoDesdeJson(json);
                   });
    }

    // Eliminamos el contacto indicado del servidor.
    eliminarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
                   .delete(`${this._direccionServidor}/contactos/${contacto.id}`)
                   .map((respuesta: Response) => {
                       // Obtenemos el cuerpo de la respuesta en formato JSON.
                       let json = respuesta.json();
                       // Creamos una instancia de Contacto.
                       return Contacto.nuevoDesdeJson(json);
                   });
    }
}