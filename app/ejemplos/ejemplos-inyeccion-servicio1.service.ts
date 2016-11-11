// Al decorar una clase con 'Injectable' evitamos tener que definir manualmente
// el proveedor asociado. Basta con indicar la clase como proveedor.

import { Injectable } from "@angular/core";

@Injectable()
export class Servicio1 {
    
    obtenerMensaje() {
        return "Soy un servicio decorado con @Injectable.";
    }
}