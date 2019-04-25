import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {Input} from "semantic-ui-react";
import {esLaTeclaDeBorrar, esUnaLetra} from "../../Funciones/letras";

configure({ adapter: new Adapter() });

let personaAAgregar = '';

beforeEach(() => {
    personaAAgregar = '';
});

const teclaPresionada = ({key}) => {
    if(esUnaLetra(key)){
        actualizarNombre(key)
    } else if(esLaTeclaDeBorrar(key)){
        borrarUltimaLetra();
    }
};

const input = <div><Input onKeyDown={teclaPresionada}/></div>;

const borrarUltimaLetra = () => {
    personaAAgregar = personaAAgregar.slice(0, personaAAgregar.length - 1)
};

const actualizarNombre = (nuevaLetra) => {
    personaAAgregar = personaAAgregar.concat(nuevaLetra).trim()
};

describe('Cuando no se escribe una letra', () => {
    it('no se agrega nada al nombre de la persona', () => {
        const componente = shallow(input);

        let vacio = '';
        componente.simulate('keyDown', {key: vacio});
        expect(personaAAgregar).toEqual(vacio);
    })
});


describe('Cuando se escribe una letra', () => {
    let primeraLetraDelNombre = 'f';

    it('se agrega al nombre de la persona', () => {
        const componente = shallow(input).find('Input');

        componente.simulate('keyDown', {key: primeraLetraDelNombre});
        expect(personaAAgregar).toEqual(primeraLetraDelNombre);
    });

    describe('y luego se oprime la tecla para borrar', () => {
        it('el nombre pierde la ultima letra', () => {
            const componente = shallow(input);

            componente.simulate('keyDown', {key: primeraLetraDelNombre});
            componente.simulate('keyDown', {key: 'Backspace'});
            expect(personaAAgregar).toEqual('');
        })
    });
});

describe('Cuando se escribe un espacio', () => {
    let espacio = ' ';

    it('no cambia el nombre de la persona', () => {
        const componente = shallow(input);

        componente.simulate('keyDown', {key: espacio});
        expect(personaAAgregar).toEqual("");
    })
});
