import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SelectorDePersonas} from "../../Componentes/SelectorDePersonas";

configure({ adapter: new Adapter() });

let personas = [
    {
        key: 'unaPersona',
        text: 'unaPersona',
        value: 'unaPersona'
    },
    {
        key: 'otraPersona',
        text: 'otraPersona',
        value: 'otraPersona',
    }
];

let personaAAgregar;
let agregarPersona = (nombre) => {personaAAgregar = nombre};
let componenteSelectorDePersonas = <SelectorDePersonas agregar={agregarPersona} personas={personas}/>;

beforeEach(() => {
    personaAAgregar = '';
    componente = shallow(componenteSelectorDePersonas)
});

let componente = shallow(componenteSelectorDePersonas);

describe('Dado un dropdown', () => {
    let dropdown = componente.find('.seleccionar-nombre');

    it('es renderizado', () => {
        expect(dropdown).toHaveLength(1);
    });

    describe('cuando se selecciona un nombre', () => {
        const nombreSeleccionado = personas[0].value;

        it('se agrega como persona seleccionada', () => {
            dropdown.simulate('change', {}, {value: nombreSeleccionado});

            expect(personaAAgregar).toEqual(nombreSeleccionado);
        });
    });
});
