import {Ronda} from "../../Ronda/Ronda";
import {RondaVacia} from "../../Ronda/RondaVacia";
import {RondaNoVacia} from "../../Ronda/RondaNoVacia";

test("La clase abstracta Ronda no puede ser instanciada", () => {
    try {
        new Ronda();
        throw new Error();
    } catch (e) {
        expect(e.message).toEqual(Ronda.errorDeInstanciacion);
    }
});


test("El metodo agregar debe ser implementado por las subclases de Ronda", () => {
    let nuevaRonda = class NuevaRonda extends Ronda {};

    try {
        new nuevaRonda().agregar('algo');
        throw new Error();
    } catch (e) {
        expect(e.message).toEqual(Ronda.implementarAgregar);
    }
});

test("El metodo proximo debe ser implementado por las subclases de Ronda", () => {
    let nuevaRonda = class NuevaRonda extends Ronda {};

    try {
        new nuevaRonda().proximo();
        throw new Error();
    } catch (e) {
        expect(e.message).toEqual(Ronda.implementarProximo);
    }
});

describe('Dada una ronda vacia', () => {
    it('el metodo proximo retorna un objeto con un valor y una nueva ronda', () => {
        const proximo = new RondaVacia().proximo();

        expect(proximo).toHaveProperty('valor');
        expect(proximo).toHaveProperty('nuevaRonda')
    });
});

describe('Dada una ronda no vacia', () => {
    it('el metodo proximo retorna un objeto con un valor y una nueva ronda', () => {
        const proximo = new RondaNoVacia(['a']).proximo();

        expect(proximo).toHaveProperty('valor');
        expect(proximo).toHaveProperty('nuevaRonda')
    });
});

test("El metodo elementos debe ser implementado por las subclases de Ronda", () => {
    let nuevaRonda = class NuevaRonda extends Ronda {};

    try {
        new nuevaRonda().elementos();
        throw new Error();
    } catch (e) {
        expect(e.message).toEqual(Ronda.implementarElementos);
    }
});