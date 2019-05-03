import {RondaNoVacia} from "./RondaNoVacia";
import {Ronda} from "./Ronda";

export class RondaVacia extends Ronda{
    static esVacia = 'La ronda esta vacia';

    agregar(unElemento){
        return new RondaNoVacia([unElemento])
    }

    avanzarTurno() {
        return new RondaVacia()
    }

    elementos() {
        return []
    }

    tomadorActual() {
        return RondaVacia.esVacia
    }
}