import {RondaVacia} from "./Ronda/RondaVacia";

export class RondaDeMates {
    static noHayNadie = RondaVacia.esVacia;

    constructor(){
        this.rondaDePersonas = new RondaVacia()
    }

    agregar(unaPersona){
        this.rondaDePersonas = this.rondaDePersonas.agregar(unaPersona)
    }

    proximo() {
        return this.rondaDePersonas.proximo();
    }
}