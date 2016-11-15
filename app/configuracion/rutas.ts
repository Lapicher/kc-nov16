import { OpaqueToken, Provider } from '@angular/core';

export const DireccionServidor: OpaqueToken = new OpaqueToken("DireccionServidor");

export const ProveedorDireccionServidor: Provider = {
    provide: DireccionServidor,
    useValue: "http://localhost:3004"
};
