import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {EscribirNombreDePersona} from "../../Componentes/EscribirNombreDePersona";

configure({ adapter: new Adapter() });

const agregarLetra = jest.fn(() => null);

describe('Cuando se escribe una letra', () => {
    it('se llama al callback de agregarLetra', () => {
        const componente = shallow(<EscribirNombreDePersona agregarLetra={agregarLetra}/>);

        componente.find('.input-agregar').simulate('keyDown', {key: 'f'});

        expect(agregarLetra).toBeCalled();
    })
});

const borrarUltimaLetra = jest.fn(() => null);

describe('Cuando se presiona la tecla de borrar', () => {
    it('se llama al callback de borrarUltimaLetra', () => {
        const componente = shallow(<EscribirNombreDePersona borrarUltimaLetra={borrarUltimaLetra}/>);

        componente.find('.input-agregar').simulate('keyDown', {key: 'Backspace'});

        expect(borrarUltimaLetra).toBeCalled();
    })
});