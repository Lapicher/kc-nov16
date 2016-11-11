// Si no decoramos la clase con 'Injectable', necesitamos establecer
// el proveedor de la misma a mano si queremos que pueda inyectarse
// como dependencia.

export class Servicio2 {
    
    obtenerMensaje() {
        return "Soy un servicio que usa un proveedor de clase.";
    }
}

export const ProveedorServicio2 = {
    provide: Servicio2,
    useClass: Servicio2
};
