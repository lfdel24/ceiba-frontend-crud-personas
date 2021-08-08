export interface Empleado {
    id: number;
    identificacion: Identificacion;
    nombreCompleto: string;
    fechaNacimiento: string;
}

export interface Identificacion {
    tipoIdentificacion: TipoIdentificacion;
    numero: string;
}


export enum TipoIdentificacion {
    CEDULA
}