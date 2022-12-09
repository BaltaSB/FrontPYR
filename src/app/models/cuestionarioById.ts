export interface CuestionarioById {
    id:            number;
    nombre:        string;
    descripcion:   string;
    fechaCreacion: null;
    activo:        number;
    usuarioId:     number;
    usuario:       null;
    listPreguntas: ListPregunta[];
}

export interface ListPregunta {
    id:             number;
    descripcion:    string;
    cuestionarioId: number;
    cuestionario:   null;
    listRespuestas: ListRespuesta[];
}

export interface ListRespuesta {
    id:          number;
    descripcion: string;
    esCorrecta:  boolean;
    preguntaId:  number;
    pregunta:    null;
}