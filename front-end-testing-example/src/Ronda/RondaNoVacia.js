import {Ronda} from "./Ronda";

export class RondaNoVacia extends Ronda {
    static errorSinElementos = 'Una RondaNoVacia no puede ser instanciada con una lista vacia como sus elementos iniciales';

    constructor(elementosIniciales = []){
        super();
        if(elementosIniciales.length === 0) {
            throw new Error(RondaNoVacia.errorSinElementos)
        }
        this.elems = elementosIniciales
    }

    agregar(unElemento){
        return new RondaNoVacia([...this.elems, unElemento])
    }

    avanzarTurno() {
        const [ primero, ...resto ] = this.elementos();
        return new RondaNoVacia([...resto, primero])
    }

    elementos() {
        return this.elems
    }

    tomadorActual() {
        return this.elems[0]
    }
}