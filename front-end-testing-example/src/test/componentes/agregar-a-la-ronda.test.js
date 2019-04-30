import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import {AgregarALaRonda} from "../../Componentes/AgregarALaRonda";
import {RondaDeMates} from "../../RondaDeMates";
import {RondaVacia} from "../../Ronda/RondaVacia";
import {rondaAPartirDe} from "../../Funciones/palabras";

configure({ adapter: new Adapter() });

function rondaVacia() {
    return new RondaDeMates(new RondaVacia());
}

const agregarPersonaALaRonda = (unaPersona) => () => {rondaDeMates = rondaAPartirDe(rondaDeMates, unaPersona)};

const componenteAgregarALaRonda = (nombre) =>  <AgregarALaRonda agregarPersona={agregarPersonaALaRonda(nombre)} />;

let rondaDeMates = rondaVacia();

const botonDe = (componente) => componente.find('.boton-agregar');

it('Se renderiza un boton', () => {
    const componente = shallow(componenteAgregarALaRonda(""));

    expect(botonDe(componente)).toHaveLength(1);
});

describe('Cuando se oprime el boton', () => {
    beforeEach(() => {
        rondaDeMates = rondaVacia();
    });

    describe('y se ingreso un nombre valido', () => {
        const unNombreValido = 'lalo';

        it('se agrega una persona a la ronda', () => {
            const componente = shallow(componenteAgregarALaRonda(unNombreValido));

            botonDe(componente).simulate('click');
            expect(rondaDeMates.proximo()).toEqual(unNombreValido);
        })
    });

    describe('y se ingreso un nombre invalido', () => {
        const unNombreInvalido = '';

        it('no se agrega una persona a la ronda', () => {
            const componente = shallow(componenteAgregarALaRonda(unNombreInvalido));

            botonDe(componente).simulate('click');
            expect(rondaDeMates.proximo()).toEqual(RondaDeMates.noHayNadie);
        })
    });
});
