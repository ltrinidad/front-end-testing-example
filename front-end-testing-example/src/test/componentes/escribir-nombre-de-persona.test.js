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

const actualizarNombre = (unaPersonaAAgregar) => (nuevaLetra) => {
    personaAAgregar = unaPersonaAAgregar.concat(nuevaLetra).trim()
};

it('Se renderiza un input', () => {
    const componente = shallow(<EscribirNombreDePersona/>);

    expect(componente.find('.input-agregar')).toHaveLength(1);
});

describe('Cuando no se escribe una letra', () => {
    it('no se agrega nada al nombre de la persona', () => {
        const componente = shallow(<EscribirNombreDePersona actualizar={actualizarNombre(personaAAgregar)}/>);

        componente.find('.input-agregar').simulate('change', {}, {value: ''});
        expect(personaAAgregar).toEqual(personaAAgregar);
    })
});


describe('Cuando se escribe una letra', () => {
    let primeraLetraDelNombre = 'f';

    it('se agrega al nombre de la persona', () => {
        const componente = shallow(<EscribirNombreDePersona actualizar={actualizarNombre(personaAAgregar)}/>);

        componente.find('.input-agregar').simulate('change', {}, {value: primeraLetraDelNombre});
        expect(personaAAgregar).toEqual(primeraLetraDelNombre);
    })
});

describe('Cuando se escribe un espacio', () => {
    let espacio = ' ';

    it('no cambia el nombre de la persona', () => {
        const componente = shallow(<EscribirNombreDePersona actualizar={actualizarNombre(personaAAgregar)}/>);

        componente.find('.input-agregar').simulate('change', {}, {value: espacio});
        expect(personaAAgregar).toEqual("");
    })
});
