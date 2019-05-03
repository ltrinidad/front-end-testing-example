import {RondaDeMates} from "../../Componentes/RondaDeMates";
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

    it('y se pide el tomador actual se obtiene que la ronda esta vacia', () => {
        expect(ronda.tomadorActual()).toEqual(RondaDeMates.noHayNadie);
        expect(ronda.participantes()).toHaveLength(0);
    });

    it('y se pide los participantes se obtiene una lista vacia', () => {
        expect(ronda.participantes()).toHaveLength(0)
    });
});

describe('Cuando se agrega una persona a la ronda', () => {
    let rondaConUnaPersona = ronda.agregar(feche);
    it('y se pide el nombre del tomador actual se obtiene el nombre de esa persona', () => {
        expect(rondaConUnaPersona.tomadorActual()).toEqual(feche);
    });

    it('y se pide los participantes se obtiene una lista con el nombre de esa persona', () => {
        expect(rondaConUnaPersona.participantes()).toContain(feche)
    });
});

describe('Cuando se agregan dos personas', () => {
    const rondaConDosPersonas = ronda.agregar(feche)
        .agregar(angie);

    describe('y se pide el tomador actual', () => {
        it('se obtiene la primera persona que ingreso, luego si se pide el nombre del tomador actual a la nueva ronda se obtiene el nombre de la segunda persona', () => {
            expect(rondaConDosPersonas.tomadorActual()).toEqual(feche);

            let nuevaRonda = rondaConDosPersonas.avanzarTurno();
            expect(nuevaRonda.tomadorActual()).toEqual(angie)
        });

        it('la ronda original no cambia el orden de sus participantes, pero si lo hace la nueva ronda generada', () => {
            let participantes = rondaConDosPersonas.participantes();
            let nuevaRonda = rondaConDosPersonas.avanzarTurno();

            expect(rondaConDosPersonas.participantes()).toEqual(participantes);
            expect(nuevaRonda.participantes()).toEqual(participantes.reverse());
        });
    });

    it('y se pide los participantes se obtiene una lista con los nombres de esas personas', () => {
        expect(rondaConDosPersonas.participantes()).toEqual(expect.arrayContaining([feche, angie]));
        expect(rondaConDosPersonas.participantes()).not.toEqual(expect.arrayContaining([lalo ,feche, angie]))
    });
});

test('Cuando se agregan tres personas, se avanza 3 turnos y se pide el tomador actual se obtiene el primero que ingreso, luego si se pide de nuevo el nombre se obtiene el segundo', () => {
    const rondaConTresPersonas = ronda.agregar(feche)
                            .agregar(angie)
                            .agregar(lalo);

    const rondaIgualALaInicial = [1, 2].reduce(function(anterior,){
        return anterior.avanzarTurno()
    }, rondaConTresPersonas);

    let nuevaRonda = rondaIgualALaInicial.avanzarTurno();
    expect(nuevaRonda.tomadorActual()).toEqual(feche);

    let rondaAPartirDeLaSegundaPersona = nuevaRonda.avanzarTurno();
    expect(rondaAPartirDeLaSegundaPersona.tomadorActual()).toEqual(angie)
});

describe('Cuando ya hay dos personas y se agrega una tercera', () => {
    const rondaConTresPersonas = rondaDeMatesCon([feche, angie]).agregar(lalo);

    it('y se pide el nombre del avanzarTurno se obtiene la primera que ingreso, luego si se pide de nuevo el nombre se obtiene la segunda', () => {
        const rondaIgualALaInicial = [1, 2].reduce(function(anterior,){
            return anterior.avanzarTurno()
        }, rondaConTresPersonas);

        let nuevaRonda = rondaIgualALaInicial.avanzarTurno();
        expect(nuevaRonda.tomadorActual()).toEqual(feche);

        let rondaAPartirDeLaSegundaPersona = nuevaRonda.avanzarTurno();
        expect(rondaAPartirDeLaSegundaPersona.tomadorActual()).toEqual(angie)
    });

    it('y se pide los participantes se obtiene una lista con los nombres de esas personas', () => {
        expect(rondaConTresPersonas.participantes()).toEqual(expect.arrayContaining([lalo,feche, angie]));
        expect(rondaConTresPersonas.participantes()).not.toEqual(expect.arrayContaining([seryo,lalo,feche, angie]))
    });
});

function rondaDeMates() {
    return new RondaDeMates(new RondaVacia());
}

function rondaDeMatesCon(personas) {
    return new RondaDeMates(new RondaNoVacia(personas));
}
