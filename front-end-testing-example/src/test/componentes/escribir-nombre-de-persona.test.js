import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {EscribirNombreDePersona} from "../../Componentes/EscribirNombreDePersona";
import {nombreAPartirDe} from "../../Funciones/palabras";
import {sinUltimaLetra} from "../../Funciones/letras";

configure({ adapter: new Adapter() });

const agregarLetraAlNombre = (nuevaLetra) => {

    personaAAgregar = nombreAPartirDe(personaAAgregar, nuevaLetra)
};
const borrarUltimaLetra = () => {

    personaAAgregar = sinUltimaLetra(personaAAgregar)
};

let personaAAgregar = '';
let componenteEscribirNombre = <EscribirNombreDePersona agregarLetra={agregarLetraAlNombre} borrarUltimaLetra={borrarUltimaLetra}/>;

beforeEach(() => {
    personaAAgregar = '';
    componente = shallow(componenteEscribirNombre)
});

let componente = shallow(componenteEscribirNombre);

describe('Dado un input', () => {
    let input = componente.find('.input-agregar');

    it('es renderizado', () => {
        expect(input).toHaveLength(1);
    });

    describe('cuando no se escribe una letra', () => {
        const vacio = '';

        it('no se agrega nada al nombre de la persona', () => {
            input.simulate('keydown', {key: vacio});

            expect(personaAAgregar).toEqual(vacio);
        })
    });

    describe('cuando se escribe una letra', () => {
        const primeraLetraDelNombre = 'f';

        it('se agrega al nombre de la persona', () => {
            input.simulate('keyDown', {key: primeraLetraDelNombre});

            expect(personaAAgregar).toEqual(primeraLetraDelNombre);
        });

        describe('y luego se oprime la tecla para borrar', () => {
            const teclaDeBorrar = 'Backspace';

            it('el nombre pierde la ultima letra', () => {
                input.simulate('keydown', {key: primeraLetraDelNombre});
                input.simulate('keyDown', {key: teclaDeBorrar});

                expect(personaAAgregar).toEqual('');
            })
        });
    });

    describe('cuando se escribe un espacio', () => {
        const espacio = ' ';

        it('no cambia el nombre de la persona', () => {
            input.simulate('keydown', {key: espacio});

            expect(personaAAgregar).toEqual("");
        })
    });
});

