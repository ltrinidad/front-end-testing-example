export class Ronda {
    static errorDeInstanciacion = 'La clase abstracta "Ronda" no puede ser instanciada directamente';
    static implementarAgregar = 'Toda ronda debe definir su propio metodo para el mensaje agregar, y retornar una nueva instancia de una Ronda';
    static implementarProximo = 'Toda ronda debe definir su propio metodo para el mensaje proximo, y retornar una nueva instancia de una Ronda';

    constructor() {
        if (this.constructor === Ronda) {
            throw new TypeError(Ronda.errorDeInstanciacion);
        }
    }

    agregar(unElemento){
        throw new Error(Ronda.implementarAgregar);
    }

    proximo() {
        throw new Error(Ronda.implementarProximo);
    }
}