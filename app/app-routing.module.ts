import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { MisContactosComponent } from "./mis-contactos/mis-contactos.component";
import { NuevoContactoComponent } from "./nuevo-contacto/nuevo-contacto.component";

// Definimos la colección de rutas de nuestra aplicación.
const rutas: Routes = [
    {
        path: "mis-contactos",
        component: MisContactosComponent
    },
    {
        path: "nuevo-contacto",
        component: NuevoContactoComponent
    },
    {
        path: "**",
        redirectTo: "/mis-contactos"
    }
];

// Creamos un nuevo módulo de routing a partir de las rutas definidas.
const moduloConRutas = RouterModule.forRoot(rutas);

// Creamos el módulo con el routing de la aplicación.
@NgModule({
    imports: [moduloConRutas],
    exports: [RouterModule]
})
export class AppRoutingModule { }