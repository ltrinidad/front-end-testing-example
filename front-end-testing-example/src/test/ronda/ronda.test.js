import {Ronda} from "../../Ronda/Ronda";

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

test("El metodo elementos debe ser implementado por las subclases de Ronda", () => {
    let nuevaRonda = class NuevaRonda extends Ronda {};

    try {
        new nuevaRonda().elementos();
        throw new Error();
    } catch (e) {
        expect(e.message).toEqual(Ronda.implementarElementos);
    }
});