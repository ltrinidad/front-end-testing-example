import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {EscribirNombreDePersona} from "../../Componentes/EscribirNombreDePersona";

configure({ adapter: new Adapter() });

const callback = jest.fn(() => null);

describe('Cuando se escribe una letra', () => {
    it('se llama al callback', () => {
        const componente = shallow(<EscribirNombreDePersona agregarLetra={callback}/>);

        componente.find('.input-agregar').simulate('change', {}, {value: 'f'});

        expect(callback).toBeCalled();
    })
});