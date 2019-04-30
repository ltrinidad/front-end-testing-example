import {RondaNoVacia} from "./RondaNoVacia";
import {Ronda} from "./Ronda";

export class RondaVacia extends Ronda{
    static esVacia = 'La ronda esta vacia';

    agregar(unElemento){
        return new RondaNoVacia([unElemento])
    }

    proximo() {
        return RondaVacia.esVacia
    }

    elementos() {
        return []
    }
}