// En este caso ocurre igual que con 'Servicio2', solo que no existe un
// constructor por defecto sin parámetros. Por tanto, tenemos que definir
// un proveedor de factoria que ayude a Angular a instanciar la clase.

export class Servicio3 {

    constructor(private message: string) { }
    
    obtenerMensaje() {
        return this.message;
    }
}

export const ProveedorServicio3 = {
    provide: Servicio3,
    useFactory: () => {
        return new Servicio3("Soy un servicio que usa un proveedor de factoría.");
    }
};
