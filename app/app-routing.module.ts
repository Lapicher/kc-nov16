import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {MisContactosComponent} from "./mis-contactos/mis-contactos.component";
import { NuevoContactoComponent } from "./nuevo-contacto/nuevo-contacto.component";

// Definimos la coleccion de rutas de nuestra aplicacion.
const rutas: Routes= [
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
        redirectTo: "mis-contactos"
    }
];

const moduloConRutas = RouterModule.forRoot(rutas);

// creamos el modulo de routring a partir de las rutas definidas
@NgModule({
    imports: [moduloConRutas],
    exports: [RouterModule]
})
export class AppRoutingModule{

}