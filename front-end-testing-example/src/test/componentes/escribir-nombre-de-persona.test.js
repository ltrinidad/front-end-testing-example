import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {EscribirNombreDePersona} from "../../Componentes/EscribirNombreDePersona";

configure({ adapter: new Adapter() });

let personaAAgregar = '';

beforeEach(() => {
    personaAAgregar = '';
});

const actualizarNombre = (nuevaLetra) => {
    personaAAgregar = personaAAgregar.concat(nuevaLetra).trim()
};

it('Se renderiza un input', () => {
    const componente = shallow(<EscribirNombreDePersona/>);

    expect(componente.find('.input-agregar')).toHaveLength(1);
});

describe('Cuando no se escribe una letra', () => {
    it('no se agrega nada al nombre de la persona', () => {
        const componente = shallow(<EscribirNombreDePersona actualizar={actualizarNombre}/>);

        let vacio = '';
        componente.find('.input-agregar').simulate('keydown', {}, {value: vacio});
        expect(personaAAgregar).toEqual(vacio);
    })
});


const borrarUltimaLetra = () => {
    personaAAgregar = personaAAgregar.slice(0, personaAAgregar.length - 1)
};

describe('Cuando se escribe una letra', () => {
    let primeraLetraDelNombre = 'f';

    it('se agrega al nombre de la persona', () => {
        const componente = shallow(<EscribirNombreDePersona actualizar={actualizarNombre}/>);

        componente.find('.input-agregar').simulate('keyDown', {key: primeraLetraDelNombre});
        expect(personaAAgregar).toEqual(primeraLetraDelNombre);
    });

    describe('y luego se oprime la tecla para borrar', () => {
        it('el nombre pierde la ultima letra', () => {
            const componente = shallow(<EscribirNombreDePersona actualizar={actualizarNombre} borrarUltimaLetra={borrarUltimaLetra}/>);

            componente.find('.input-agregar').simulate('keydown', {}, {value: primeraLetraDelNombre});
            componente.find('.input-agregar').simulate('keyDown', {key: 'Backspace'});
            expect(personaAAgregar).toEqual('');
        })
    });
});

describe('Cuando se escribe un espacio', () => {
    let espacio = ' ';

    it('no cambia el nombre de la persona', () => {
        const componente = shallow(<EscribirNombreDePersona actualizar={actualizarNombre}/>);

        componente.find('.input-agregar').simulate('keydown', {}, {value: espacio});
        expect(personaAAgregar).toEqual("");
    })
});
