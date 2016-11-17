import {
    Directive,
    ElementRef,
    Renderer,
    HostListener } from "@angular/core";

// Ejemplo de Directiva de Atributo.
@Directive({ selector: "[EjemplosDirectivaAtributo]" })
export class EjemplosDirectivaAtributoDirective {

    // Con 'HostListener' atendemos eventos del elemento en el cual
    // está situada la directiva.
    @HostListener("mouseenter")
    cambiarEstilo() {
        this._renderer.setElementStyle(
            this._elementRef.nativeElement,
            "font-weight",
            "bold"
        );
        this._renderer.setElementStyle(
            this._elementRef.nativeElement,
            "background-color",
            "red"
        )
        this._renderer.setElementStyle(
            this._elementRef.nativeElement,
            "color",
            "white"
        );
    }

    // Con 'Renderer' establecemos los atributos del elemento en el cual está situada la
    // directiva. El elemento en cuestión lo obtenemos de 'ElementRef.nativeElement'.
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer) { }
}
