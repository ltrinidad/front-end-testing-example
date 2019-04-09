import {Ronda} from "../Ronda";

test('Cuando no hay nadie en la ronda y se pide el proximo se obtiene que no hay nadie en la ronda', () => {
    const ronda = new Ronda();
    expect(ronda.proximo()).toEqual(Ronda.noHayNadie)
});