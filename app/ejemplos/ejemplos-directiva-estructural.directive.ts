import {
    Directive,
    TemplateRef,
    ViewContainerRef,
    Input } from "@angular/core";

// Ejemplo de Directiva Estructural.
@Directive({ selector: "[EjemploDirectivaEstructural]" })
export class EjemplosDirectivaEstructuralDirective {

    @Input("EjemploDirectivaEstructural") set esperar(milisegundos: number) {
        setTimeout(() => {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }, milisegundos);
    }

    // 'ViewContainerRef' es una renferencia al marco del DOM en el cual puedo pintar
    // elementos. 'TemplateRef' es una referencia al template contenido en el elemento
    // en el cual está situada la directiva.
    constructor(
        private _templateRef: TemplateRef<any>,
        private _viewContainerRef: ViewContainerRef) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
}