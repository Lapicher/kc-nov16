import { OpaqueToken, Provider } from '@angular/core';

export const DireccionServidor: OpaqueToken = new OpaqueToken("DireccionServidor");

export const ProveedorDireccionServidor: Provider = {
    provide: DireccionServidor,
    useValue: "http://localhost:3004"
};

export const DireccionFaker: OpaqueToken = new OpaqueToken("DireccionFaker");

export const ProveedorDireccionFaker: Provider = {
    provide: DireccionFaker,
    useValue: "http://faker.hook.io/?property=image.avatar"
}