import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SelectorDePersonas} from "../../Componentes/SelectorDePersonas";

configure({ adapter: new Adapter() });
const callback = jest.fn(() => null);

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

describe('Cuando un nombre del dropdown es clickeado', () => {
    it('se llama al callback', () => {
        const componente = shallow(<SelectorDePersonas agregar={callback} personas={personas}/>);

        componente.find('.seleccionar-nombre').simulate('change', {} , {value: personas[0].value});

        expect(callback).toBeCalled();
    })
});