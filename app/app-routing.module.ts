import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { MisContactosComponent } from "./mis-contactos/mis-contactos.component";
import { NuevoContactoComponent } from "./nuevo-contacto/nuevo-contacto.component";
import { ContactosResolve } from "./servicios/contactos-resolve.service";

// Definimos la colección de rutas de nuestra aplicación.
const rutas: Routes = [
    {
        path: "mis-contactos",
        component: MisContactosComponent,

        // En la propiedad 'resolve' añadimos los datos que deben resolverse
        // previamente a la navegación de la ruta. Debemos indicar el servicios
        // 'Resolve' que se va a encargar de obtener los datos.
        resolve: {
            contactos: ContactosResolve
        }
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