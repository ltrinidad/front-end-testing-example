export class Ronda {
    static noHayNadie = 'no hay personas en la ronda';

    constructor(){
        this.personas = []
    }

    agregar(unaPersona){
        this.personas.push(unaPersona)
    }

    proximo() {
        if(this.personas.length === 0){
            return Ronda.noHayNadie
        } else {
            return this.personas.shift()
        }
    }
}
