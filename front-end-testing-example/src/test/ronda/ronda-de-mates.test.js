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

    it('y se pide el proximo se obtiene que la ronda esta vacia', () => {
        const proximo = ronda.proximo();

        expect(proximo.nombre).toEqual(RondaDeMates.noHayNadie);
        expect(proximo.nuevaRonda.participantes()).toHaveLength(0);
    });

    it('y se pide los participantes se obtiene una lista vacia', () => {
        expect(ronda.participantes()).toHaveLength(0)
    });
});

describe('Cuando se agrega una persona a la ronda', () => {
    let nuevaRonda = ronda.agregar(feche);
    it('y se pide el nombre del proximo se obtiene el nombre de esa persona', () => {
        expect(nuevaRonda.proximo().nombre).toEqual(feche);
    });

    it('y se pide los participantes se obtiene una lista con el nombre de esa persona', () => {
        expect(nuevaRonda.participantes()).toContain(feche)
    });
});

describe('Cuando se agregan dos personas', () => {
    const rondaConDosPersonas = ronda.agregar(feche)
        .agregar(angie);

    describe('y se pide el proximo', () => {
        it('se obtiene la primera persona que ingreso, luego si se pide el nombre del proximo a la nueva ronda se obtiene el nombre de la segunda persona', () => {
            let primeraVezQueSePregunta = rondaConDosPersonas.proximo();
            expect(primeraVezQueSePregunta.nombre).toEqual(feche);

            let nuevaRonda = primeraVezQueSePregunta.nuevaRonda;
            expect(nuevaRonda.proximo().nombre).toEqual(angie)
        });

        it('la ronda original no cambia el orden de sus participantes, pero si lo hace la nueva ronda generada, y devuelve el nombre de la primera persona que ingreso', () => {
            let participantes = rondaConDosPersonas.participantes();
            let proximo = rondaConDosPersonas.proximo();
            let nuevaRonda = proximo.nuevaRonda;
            let nombre = proximo.nombre;

            expect(rondaConDosPersonas.participantes()).toEqual(participantes);
            expect(nuevaRonda.participantes()).toEqual(participantes.reverse());
            expect(nombre).toEqual(feche);
        });
    });


    it('y se pide los participantes se obtiene una lista con los nombres de esas personas', () => {
        expect(rondaConDosPersonas.participantes()).toEqual(expect.arrayContaining([feche, angie]));
        expect(rondaConDosPersonas.participantes()).not.toEqual(expect.arrayContaining([lalo ,feche, angie]))
    });
});

test('Cuando se agregan tres personas y se pide el nombre del proximo 4 veces se obtiene el primero que ingreso, luego si se pide de nuevo el nombre se obtiene el segundo', () => {
    const rondaConTresPersonas = ronda.agregar(feche)
                            .agregar(angie)
                            .agregar(lalo);

    const rondaIgualALaInicial = [1, 2, 3].reduce(function(anterior,){
        return anterior.proximo().nuevaRonda
    }, rondaConTresPersonas);

    let proximo = rondaIgualALaInicial.proximo();
    expect(proximo.nombre).toEqual(feche);

    let rondaAPartirDeLaSegundaPersona = proximo.nuevaRonda;
    expect(rondaAPartirDeLaSegundaPersona.proximo().nombre).toEqual(angie)
});

describe('Cuando ya hay dos personas y se agrega una tercera', () => {
    const rondaConTresPersonas = rondaDeMatesCon([feche, angie]).agregar(lalo);

    it('y se pide el nombre del proximo se obtiene la primera que ingreso, luego si se pide de nuevo el nombre se obtiene la segunda', () => {
        const rondaIgualALaInicial = [1, 2, 3].reduce(function(anterior,){
            return anterior.proximo().nuevaRonda
        }, rondaConTresPersonas);

        let proximo = rondaIgualALaInicial.proximo();
        expect(proximo.nombre).toEqual(feche);

        let rondaAPartirDeLaSegundaPersona = proximo.nuevaRonda;
        expect(rondaAPartirDeLaSegundaPersona.proximo().nombre).toEqual(angie)
    });

    it('y se pide los participantes se obtiene una lista con los nombres de esas personas', () => {
        expect(rondaConTresPersonas.participantes()).toEqual(expect.arrayContaining([lalo,feche, angie]));
        expect(rondaConTresPersonas.participantes()).not.toEqual(expect.arrayContaining([seryo,lalo,feche, angie]))
    });
});

it('Al pedir el proximo se retorna un objeto con un nombre y una nueva ronda', () => {
    const proximo = ronda.proximo();

    expect(proximo).toHaveProperty('nombre');
    expect(proximo).toHaveProperty('nuevaRonda')
});

function rondaDeMates() {
    return new RondaDeMates(new RondaVacia());
}

function rondaDeMatesCon(personas) {
    return new RondaDeMates(new RondaNoVacia(personas));
}
