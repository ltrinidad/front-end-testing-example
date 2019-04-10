import {Ronda} from "./Ronda";

export class RondaNoVacia extends Ronda {
    constructor(elementosIniciales){
        super();
        this.elementos = elementosIniciales
    }

    agregar(unElemento){
        return new RondaNoVacia([...this.elementos, unElemento])
    }

    proximo() {
        let proximo = this.elementos.shift();
        this.elementos.push(proximo);
        return proximo
    }
}