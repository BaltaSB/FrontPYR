export class Respuesta{
    id?:number;
    descripcion: string;
    esCorrecta: Boolean;

    constructor(descripcion: string, esCorrecta: boolean, id?: number){
        this.id=id;
        this.descripcion = descripcion;
        this.esCorrecta = esCorrecta;

    }

}