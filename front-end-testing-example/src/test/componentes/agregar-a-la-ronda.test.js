import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {AgregarALaRonda} from "../../Componentes/AgregarALaRonda";
import {RondaDeMates} from "../../RondaDeMates";

configure({ adapter: new Adapter() });

let rondaDeMates = new RondaDeMates();

it('Se renderiza un boton', () => {
    const componente = shallow(<AgregarALaRonda/>);

    expect(componente.find('.boton-agregar')).toHaveLength(1);
});

describe('Cuando se oprime el boton', () => {
    beforeEach(() => {
        rondaDeMates = new RondaDeMates();
    });

    const agregarPersonaA = (unaRondaDeMates) => (unaPersona) => {unaRondaDeMates.agregar(unaPersona)};

    describe('y se ingreso un nombre valido', () => {
        const unNombreValido = 'lalo';

        it('se agrega una persona a la ronda', () => {
            const componente = shallow(<AgregarALaRonda personaAAgregar={unNombreValido} agregarPersona={agregarPersonaA(rondaDeMates)} />);

            componente.find('.boton-agregar').simulate('click');
            expect(rondaDeMates.proximo()).toEqual(unNombreValido);
        })
    });

    describe('y se ingreso un nombre invalido', () => {
        const unNombreInvalido = '';

        it('no se agrega una persona a la ronda', () => {
            const componente = shallow(<AgregarALaRonda personaAAgregar={unNombreInvalido} agregarPersona={agregarPersonaA(rondaDeMates)} />);

            componente.find('.boton-agregar').simulate('click');
            expect(rondaDeMates.proximo()).toEqual(RondaDeMates.noHayNadie);
        })
    });
});
