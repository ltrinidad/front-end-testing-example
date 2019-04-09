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

test('Cuando hay dos personas y se pide el proximo se obtiene la primera que ingreso, luego si se pide de nuevo el proximo se obtiene la segunda', () => {
    const ronda = new Ronda();
    ronda.agregar('feche');
    ronda.agregar('angie');
    expect(ronda.proximo()).toEqual('feche');
    expect(ronda.proximo()).toEqual('angie')
});

test('Cuando hay tres personas y se pide el proximo 4 veces se obtiene el primero que ingreso, luego si se pide de nuevo el proximo se obtiene el segundo', () => {
    const ronda = new Ronda();
    ronda.agregar('feche');
    ronda.agregar('angie');
    ronda.agregar('lalo');

    [1,2,3].forEach(() => ronda.proximo());

    expect(ronda.proximo()).toEqual('feche');
    expect(ronda.proximo()).toEqual('angie')
});