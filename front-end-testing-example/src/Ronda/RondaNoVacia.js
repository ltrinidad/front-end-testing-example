import {Ronda} from "./Ronda";

export class RondaNoVacia extends Ronda {
    constructor(elementosIniciales){
        super();
        this.elems = elementosIniciales
    }

    agregar(unElemento){
        return new RondaNoVacia([...this.elems, unElemento])
    }

    proximo() {
        let proximo = this.elems.shift();
        this.elems.push(proximo);
        return proximo
    }

    elementos() {
        return this.elems
    }
}