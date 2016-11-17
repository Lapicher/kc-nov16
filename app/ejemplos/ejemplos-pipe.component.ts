import { Component } from "@angular/core";

@Component({
    selector: "ejemplos-pipe",
    template: `
        <div>
            <strong>DatePipe:</strong> {{ fecha | date:'dd/MM/yyyy' }}
        <div>
        </div>
            <strong>CurrencyPipe:</strong> {{ precio | currency }}
        <div>
        </div>
            <strong>LowerCasePipe:</strong> {{ texto | lowercase }}
        <div>
        </div>
            <strong>UpperCasePipe:</strong> {{ texto | uppercase }}
        </div>
    `
})
export class EjemplosPipeComponent {
    
    fecha: Date = new Date();
    precio: number = 34.1;
    texto: string = "HoLa QuE tAl EsTaiS?";
}