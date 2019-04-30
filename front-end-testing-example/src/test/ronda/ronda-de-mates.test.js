import {RondaDeMates} from "../../RondaDeMates";
import {RondaVacia} from "../../Ronda/RondaVacia";
import {RondaNoVacia} from "../../Ronda/RondaNoVacia";

let ronda = rondaDeMates();

beforeEach(() => {
	ronda = rondaDeMates();
});

const angie = 'angie';
const feche = 'feche';
const lalo = 'lalo';
const seryo = 'seryo';

describe('Cuando no hay nadie en la ronda ', () => {
    it('y se pide el proximo se obtiene que la ronda esta vacia', () => {
        expect(ronda.proximo()).toEqual(RondaDeMates.noHayNadie)
    });

    it('y se pide los participantes se obtiene una lista vacia', () => {
        expect(ronda.participantes()).toHaveLength(0)
    });
});

describe('Cuando se agrega una persona a la ronda', () => {
    let nuevaRonda = ronda.agregar(feche);
    it('y se pide el proximo se obtiene el nombre de esa persona', () => {
        expect(nuevaRonda.proximo()).toEqual(feche);
    });

    it('y se pide los participantes se obtiene una lista con el nombre de esa persona', () => {
        expect(nuevaRonda.participantes()).toContain(feche)
    });
});

describe('Cuando se agregan dos personas', () => {
    const nuevaRonda = ronda.agregar(feche)
        .agregar(angie);

    it('y se pide el proximo se obtiene la primera que ingreso, luego si se pide de nuevo el proximo se obtiene la segunda', () => {
        expect(nuevaRonda.proximo()).toEqual(feche);
        expect(nuevaRonda.proximo()).toEqual(angie)
    });

    it('y se pide los participantes se obtiene una lista con los nombres de esas personas', () => {
        expect(nuevaRonda.participantes()).toEqual(expect.arrayContaining([feche, angie]));
        expect(nuevaRonda.participantes()).not.toEqual(expect.arrayContaining([lalo ,feche, angie]))
    });
});

test('Cuando se agregan tres personas y se pide el proximo 4 veces se obtiene el primero que ingreso, luego si se pide de nuevo el proximo se obtiene el segundo', () => {
    const nuevaRonda = ronda.agregar(feche)
                            .agregar(angie)
                            .agregar(lalo);

    [1,2,3].forEach(() => nuevaRonda.proximo());

    expect(nuevaRonda.proximo()).toEqual(feche);
    expect(nuevaRonda.proximo()).toEqual(angie)
});

describe('Cuando ya hay dos personas y se agrega una tercera', () => {
    const nuevaRonda = rondaDeMatesCon([feche, angie]).agregar(lalo);

    it('y se pide el proximo se obtiene la primera que ingreso, luego si se pide de nuevo el proximo se obtiene la segunda', () => {
        [1,2,3].forEach(() => ronda.proximo());

        expect(nuevaRonda.proximo()).toEqual(feche);
        expect(nuevaRonda.proximo()).toEqual(angie)
    });

    it('y se pide los participantes se obtiene una lista con los nombres de esas personas', () => {
        expect(nuevaRonda.participantes()).toEqual(expect.arrayContaining([lalo,feche, angie]));
        expect(nuevaRonda.participantes()).not.toEqual(expect.arrayContaining([seryo,lalo,feche, angie]))
    });
});

function rondaDeMates() {
    return new RondaDeMates(new RondaVacia());
}

function rondaDeMatesCon(personas) {
    return new RondaDeMates(new RondaNoVacia(personas));
}
