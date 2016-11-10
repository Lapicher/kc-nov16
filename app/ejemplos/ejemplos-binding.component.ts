import { Component } from "@angular/core";

@Component({

    // Con 'selector' establecemos el nombre de la etiqueta HTML
    // que usaremos para instanciar este componente.
    selector: "ejemplos-binding",
    
    // Con 'templateUrl' indicamos la ruta al HTML que contiene la vista del
    // componente. Si es muy liviana, podemos indicarla en línea usando 'template'.
    templateUrl: "./app/ejemplos/ejemplos-binding.component.html",
    
    // En 'styles' definimos una colección de estilos CSS. Al igual que ocurre con
    // el template, podríamos enlazar un o varios documento CSS externo a través del
    // metadato 'styleUrls'.
    styles: [`
    .caja {
        width: 100px;
        height: 100px;
        background-color: red;
    }
    `]
})
export class EjemplosBindingComponent {

    // Declaramos unos atributos para demostrar la interpolación en el template.
    alumnos: string = "KeepCoders!";
    numeroDeLaSuerte: number  = 42;

    // Con este atributo trabajamos el enlace a propiedades en el template.
    textareaLineas: number = 10;

    // Atributo y función para jugar con el enlace a clases y estilos CSS.
    pintamosClase: boolean = true;
    obtenerColor() { return "blue"; }

    // Función que se encarga de manejar el evento 'click' que hemos enlazado en el template.
    mostrarMensaje() { alert("Hola señoritas y señoritos!"); }
}