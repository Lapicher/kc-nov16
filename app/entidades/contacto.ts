
// Representa una entidad contacto.

export class Contacto {

    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public email: string,
        public telefono: string,
        public facebook: string,
        public twitter: string,
        public avatar: string
    ) { }

    static nuevoDesdeJson(json: any): Contacto {
        return new Contacto(
            json.id,
            json.nombre,
            json.apellido,
            json.email,
            json.telefono,
            json.facebook,
            json.twitter,
            json.avatar || ""
        )
    }

    public generarRutaFacebook(): string {
        return this.facebook ? `https://www.facebook.com/${this.facebook}`:null;
    }

    public generarRutaTwitter(): string{
        return this.twitter ? `https://www.twitter.com/${this.twitter}`:null;
    }
}
