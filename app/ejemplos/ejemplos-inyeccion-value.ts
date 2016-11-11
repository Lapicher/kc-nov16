// Si queremos hacer la inyección de un dato primitivo, no de una clase, necesitamos
// definir un proveedor de valor. El token que indicamos como 'provide' no puede ser
// texto plano, ya que puede chocar con otro token ya existente en el propio framework
// o en código de un tercero que usemos en nuestro proyecto. Esto lo solucionamos
// creando un 'OpaqueToken'. Además, es importante tener en cuenta que la inyección de
// este valor debe hacerse a través del decorador '@Inject'; no puede hacerse de la
// forma simplificada.

import { OpaqueToken } from "@angular/core";

export const MiSuperValor: OpaqueToken = new OpaqueToken("MiSuperValor");

export const ProveedorMiSuperValor = {
    provide: MiSuperValor,
    useValue: "Soy un valor inyectado como dependencia."
};
