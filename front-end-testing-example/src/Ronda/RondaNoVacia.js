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
        let copiaDeElementos = this.elementos().slice(0);
        let proximo = copiaDeElementos.shift();
        copiaDeElementos.push(proximo);
        return {valor: proximo, nuevaRonda: new RondaNoVacia(copiaDeElementos)}
    }

    elementos() {
        return this.elems
    }
}