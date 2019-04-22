import {RondaDeMates} from "../../RondaDeMates";
import {RondaVacia} from "../../Ronda/RondaVacia";
import {RondaNoVacia} from "../../Ronda/RondaNoVacia";

let ronda;

beforeEach(() => {
	ronda = rondaDeMates();
})

const angie = 'angie'
const feche = 'feche'
const lalo = 'lalo'

test('Cuando no hay nadie en la ronda y se pide el proximo se obtiene que no hay nadie en la ronda', () => {
    expect(ronda.proximo()).toEqual(RondaDeMates.noHayNadie)
});

test('Cuando se agrega una persona a la ronda y se pide el proximo se obtiene el nombre de esa persona', () => {
    const nuevaRonda = ronda.agregar(feche);
    expect(nuevaRonda.proximo()).toEqual(feche);
});

test('Cuando se agregan dos personas y se pide el proximo se obtiene la primera que ingreso, luego si se pide de nuevo el proximo se obtiene la segunda', () => {
    const nuevaRonda = ronda.agregar(feche)
                            .agregar(angie);
    expect(nuevaRonda.proximo()).toEqual(feche);
    expect(nuevaRonda.proximo()).toEqual(angie)
});

test('Cuando se agregan tres personas y se pide el proximo 4 veces se obtiene el primero que ingreso, luego si se pide de nuevo el proximo se obtiene el segundo', () => {
    const nuevaRonda = ronda.agregar(feche)
                            .agregar(angie)
                            .agregar(lalo);

    [1,2,3].forEach(() => nuevaRonda.proximo());

    expect(nuevaRonda.proximo()).toEqual(feche);
    expect(nuevaRonda.proximo()).toEqual(angie)
});

test('Cuando ya hay dos personas y se pide el proximo se obtiene la primera que ingreso, luego si se pide de nuevo el proximo se obtiene la segunda', () => {
    ronda = rondaDeMatesCon([feche, angie, lalo]);

    [1,2,3].forEach(() => ronda.proximo());

    expect(ronda.proximo()).toEqual(feche);
    expect(ronda.proximo()).toEqual(angie)
});

function rondaDeMates() {
    return new RondaDeMates(new RondaVacia());
}

function rondaDeMatesCon(personas) {
    return new RondaDeMates(new RondaNoVacia(personas));
}
