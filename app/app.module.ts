// En el documento 'app.module.ts' definimos el módulo principal de nuestra app.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// Imports correspondientes a los ejemplos.
import { EjemplosBindingComponent } from "./ejemplos/ejemplos-binding.component";
import { EjemplosComponentesComponent, CajaComponent } from "./ejemplos/ejemplos-componentes.component";
import { EjemplosInyeccionComponent } from "./ejemplos/ejemplos-inyeccion.component";
import { Servicio1 } from "./ejemplos/ejemplos-inyeccion-servicio1.service";
import { Servicio2, ProveedorServicio2 } from "./ejemplos/ejemplos-inyeccion-servicio2.service";
import { Servicio3, ProveedorServicio3 } from "./ejemplos/ejemplos-inyeccion-servicio3.service";
import { ProveedorMiSuperValor } from "./ejemplos/ejemplos-inyeccion-value";

// Imports correspondientes a la aplicación de agenda.
import { AppComponent }   from './app.component';
import { ListaContactosComponent } from "./lista-contactos/lista-contactos.component";
import { ContactosService } from "./servicios/contactos.service";
import { DetallesContactoComponent } from "./detalles-contacto/detalles-contacto.component";
import { FormularioContactoComponent } from "./formulario-contacto/formulario-contacto.component";
import { AppRoutingModule } from "./app-routing.module";
import { MisContactosComponent } from "./mis-contactos/mis-contactos.component";
import { NuevoContactoComponent } from "./nuevo-contacto/nuevo-contacto.component";

// Decoramos la clase 'AppModule' con el decorador 'NgModule' para que ésta se
// comporte como un módulo. Es necesario indicar ciertos metadatos.
@NgModule({
  
  // En 'imports' establecemos otros módulos de los cuales tenemos dependencias. En
  // este caso importamos 'BrowserModule', necesario para que la aplicación funcione
  // correctamente en un navegador web. También importamos 'FormsModule' para poder
  // usar la directiva 'ngModel', ya que forma parte de él.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  // Todas aquellos componentes, directivas y pipes de nuestra app deben declararse
  // en el metadato 'declarations'. Si no se declara, no puede usarse.
  declarations: [
    AppComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    ListaContactosComponent,
    DetallesContactoComponent,
    EjemplosInyeccionComponent,
    FormularioContactoComponent,
    MisContactosComponent,
    NuevoContactoComponent
  ],

  // En 'providers' establecemos los proveedores de todas las piezas de código que
  // sean susceptibles de ser inyectadas como dependencias en otras. Principalmente,
  // y en la gran mayoría de los casos, indicaremos servicios, que es la pieza
  // inyectable más común de la plataforma.
  providers: [
    ContactosService,
    Servicio1,
    ProveedorServicio2,
    ProveedorServicio3,
    ProveedorMiSuperValor
  ],

  // Aquí indicamos el componente raíz. El módulo necesita saber cuál de todos los
  // componentes declarados es el que está más arriba en la jerarquía para saber
  // cómo se organizan entre ellos, y lo hacemos en 'bootstrap'.
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
