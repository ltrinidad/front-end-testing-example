import {RondaVacia} from "./Ronda/RondaVacia";

export class RondaDeMates {
    static noHayNadie = RondaVacia.esVacia;

    constructor(rondaInicial){
        this.rondaDePersonas = rondaInicial
    }

    agregar(unaPersona){
        return new RondaDeMates(this.rondaDePersonas.agregar(unaPersona))
    }

    proximo() {
        return this.rondaDePersonas.proximo();
    }
}