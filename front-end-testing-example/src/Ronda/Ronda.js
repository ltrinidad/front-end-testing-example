export class Ronda {
    static errorDeInstanciacion = 'La clase abstracta "Ronda" no puede ser instanciada directamente';
    static implementarAgregar = 'Toda ronda debe definir su propio metodo para el mensaje "agregar", y retornar una nueva instancia de una Ronda';
    static implementarAvanzarTurno = 'Toda ronda debe definir su propio metodo para el mensaje "avanzarTurno", y retornar una nueva instancia de una Ronda';
    static implementarElementos = 'Toda ronda debe definir su propio metodo para el mensaje "elementos" y retornar una lista';
    static implementarTomadorActual = 'Toda ronda debe definir su propio metodo para el mensaje "implementarTomadorActual"';

    constructor() {
        if (this.constructor === Ronda) {
            throw new TypeError(Ronda.errorDeInstanciacion);
        }
    }

    agregar(unElemento){
        throw new Error(Ronda.implementarAgregar);
    }

    avanzarTurno() {
        throw new Error(Ronda.implementarAvanzarTurno);
    }

    elementos() {
        throw new Error(Ronda.implementarElementos);
    }

    tomadorActual() {
        throw new Error(Ronda.implementarTomadorActual);
    }
}