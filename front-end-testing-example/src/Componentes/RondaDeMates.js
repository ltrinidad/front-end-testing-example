import {RondaVacia} from "../Ronda/RondaVacia";

export class RondaDeMates {
    static noHayNadie = RondaVacia.esVacia;

    constructor(rondaInicial){
        this.rondaDePersonas = rondaInicial
    }

    agregar(unaPersona){
        return new RondaDeMates(this.rondaDePersonas.agregar(unaPersona))
    }

    avanzarTurno() {
        return new RondaDeMates(this.rondaDePersonas.avanzarTurno())
    }

    participantes() {
        return this.rondaDePersonas.elementos()
    }

    tomadorActual() {
        return this.rondaDePersonas.tomadorActual()
    }
}