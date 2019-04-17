import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {actualizarNombre} from "../../Funciones/escribir-nombre-de-persona";

configure({ adapter: new Adapter() });

let personaAAgregar = '';

beforeEach(() => {
    personaAAgregar = '';
});

describe('Cuando no se escribe una letra', () => {
    it('no se agrega nada al nombre de la persona', () => {
        const vacio = '';
        const nombre = actualizarNombre(personaAAgregar)(vacio);

        expect(nombre).toEqual(vacio);
    })
});


describe('Cuando se escribe una letra', () => {
    const primeraLetraDelNombre = 'f';

    it('se agrega al nombre de la persona', () => {
        const nombre = actualizarNombre(personaAAgregar)(primeraLetraDelNombre);

        expect(nombre).toEqual(primeraLetraDelNombre);
    });

    describe('y luego otra', () => {

        let segundaLetraDelNombre = 'e';

        it('se agrega al nombre de la persona', () => {
            let nombre = actualizarNombre(personaAAgregar)(primeraLetraDelNombre);
            nombre = actualizarNombre(nombre)(segundaLetraDelNombre);

            expect(nombre).toEqual(primeraLetraDelNombre.concat(segundaLetraDelNombre));
        })
    });
});

describe('Cuando se escribe un espacio', () => {
    let espacio = ' ';

    it('no cambia el nombre de la persona', () => {
        const nombre = actualizarNombre(personaAAgregar)(espacio);

        expect(nombre).toEqual(personaAAgregar);
    })
});