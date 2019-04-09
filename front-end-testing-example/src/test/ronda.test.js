import {Ronda} from "../Ronda";

test('Cuando no hay nadie en la ronda y se pide el proximo se obtiene que no hay nadie en la ronda', () => {
    const ronda = new Ronda();
    expect(ronda.proximo()).toEqual(Ronda.noHayNadie)
});

test('Cuando hay una persona en la ronda y se pide el proximo se obtiene el nombre de esa persona', () => {
    const ronda = new Ronda();
    ronda.agregar('feche');
    expect(ronda.proximo()).toEqual('feche');
});