import {RondaVacia} from "../Ronda/RondaVacia";

export class RondaDeMates {
    static noHayNadie = RondaVacia.esVacia;

    constructor(rondaInicial){
        this.rondaDePersonas = rondaInicial
    }

    agregar(unaPersona){
        return new RondaDeMates(this.rondaDePersonas.agregar(unaPersona))
    }

    proximo() {
        const proximoDeLaRonda = this.rondaDePersonas.proximo();
        return {nombre: proximoDeLaRonda.valor, nuevaRonda: new RondaDeMates(proximoDeLaRonda.nuevaRonda)};
    }

    participantes() {
        return this.rondaDePersonas.elementos()
    }
}