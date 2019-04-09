export class Ronda {
    static noHayNadie = 'no hay nadie en la ronda';

    constructor(){
        this.turnoDe = Ronda.noHayNadie
    }

    agregar(unaPersona){
        this.turnoDe = unaPersona
    }

    proximo() {
        return this.turnoDe
    }
}
