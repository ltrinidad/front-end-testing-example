import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {EscribirNombreDePersona} from "../../Componentes/EscribirNombreDePersona";
import {nombreAPartirDe} from "../../Funciones/palabras";
import {sinUltimaLetra} from "../../Funciones/letras";

configure({ adapter: new Adapter() });

let personaAAgregar = '';
let componente;

beforeEach(() => {
    personaAAgregar = '';
    componente = shallow(<EscribirNombreDePersona agregarLetra={agregarLetraAlNombre} borrarUltimaLetra={borrarUltimaLetra}/>);
});

const agregarLetraAlNombre = (nuevaLetra) => {
    personaAAgregar = nombreAPartirDe(personaAAgregar, nuevaLetra)
};

const borrarUltimaLetra = () => {
    personaAAgregar = sinUltimaLetra(personaAAgregar)
};

it('Se renderiza un input', () => {
    expect(componente.find('.input-agregar')).toHaveLength(1);
});

describe('Cuando no se escribe una letra', () => {
    const vacio = '';

    it('no se agrega nada al nombre de la persona', () => {
        componente.find('.input-agregar').simulate('keydown', {key: vacio});

        expect(personaAAgregar).toEqual(vacio);
    })
});

describe('Cuando se escribe una letra', () => {
    const primeraLetraDelNombre = 'f';

    it('se agrega al nombre de la persona', () => {
        componente.find('.input-agregar').simulate('keyDown', {key: primeraLetraDelNombre});

        expect(personaAAgregar).toEqual(primeraLetraDelNombre);
    });

    describe('y luego se oprime la tecla para borrar', () => {
        const teclaDeBorrar = 'Backspace';

        it('el nombre pierde la ultima letra', () => {
            componente.find('.input-agregar').simulate('keydown', {key: primeraLetraDelNombre});
            componente.find('.input-agregar').simulate('keyDown', {key: teclaDeBorrar});

            expect(personaAAgregar).toEqual('');
        })
    });
});

describe('Cuando se escribe un espacio', () => {
    const espacio = ' ';

    it('no cambia el nombre de la persona', () => {
        componente.find('.input-agregar').simulate('keydown', {key: espacio});

        expect(personaAAgregar).toEqual("");
    })
});