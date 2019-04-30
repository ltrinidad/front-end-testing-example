import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AgregarALaRonda} from "../../Componentes/AgregarALaRonda";

configure({ adapter: new Adapter() });

const callback = jest.fn(() => null);

describe('Cuando el boton es clickeado', () => {
    it('se llama al callback', () => {
        const componente = shallow(<AgregarALaRonda agregarPersona={callback}/>);

        componente.find('.boton-agregar').simulate('click');

        expect(callback).toBeCalled();
    })
});