import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {AgregarALaRonda} from "../../../Componentes/AgregarALaRonda";
import {RondaDeMates} from "../../../RondaDeMates";

configure({ adapter: new Adapter() });

it('Se renderiza un boton', () => {
    const componente = shallow(<AgregarALaRonda/>);

    expect(componente.find('.boton-agregar')).toHaveLength(1);
});

it('Se renderiza un input', () => {
    const componente = shallow(<AgregarALaRonda/>);

    expect(componente.find('.input-agregar')).toHaveLength(1);
});

it('Cuando se oprime el boton se agrega una persona a la ronda', () => {
    let rondaDeMates = new RondaDeMates();
    const componente = shallow(<AgregarALaRonda rondaDeMates={rondaDeMates}/>);

    componente.find('.boton-agregar').simulate('click', {"target":{"value":'feche'}});
    expect(rondaDeMates.proximo()).toEqual('feche');
});