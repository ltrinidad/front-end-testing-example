import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {EscribirNombreDePersona} from "../../Componentes/EscribirNombreDePersona";
import {esLaTeclaDeBorrar, esUnaLetra} from "../../Funciones/letras";

configure({ adapter: new Adapter() });

const agregarLetra = jest.fn(() => null);

describe('Cuando se escribe una letra', () => {
    it('se llama al callback de agregarLetra', () => {
        const componente = shallow(<EscribirNombreDePersona agregarLetra={agregarLetra}/>);

        let letraF = 'f';

        expect(esUnaLetra(letraF));

        componente.find('.input-agregar').simulate('keyDown', {key: letraF});

        expect(agregarLetra).toBeCalled();
    })
});

const borrarUltimaLetra = jest.fn(() => null);

describe('Cuando se presiona la tecla de borrar', () => {
    it('se llama al callback de borrarUltimaLetra', () => {
        const componente = shallow(<EscribirNombreDePersona borrarUltimaLetra={borrarUltimaLetra}/>);

        let backspace = 'Backspace';

        expect(esLaTeclaDeBorrar(backspace));

        componente.find('.input-agregar').simulate('keyDown', {key: backspace});

        expect(borrarUltimaLetra).toBeCalled();
    })
});