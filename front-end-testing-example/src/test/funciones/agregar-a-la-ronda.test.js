import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {RondaDeMates} from "../../RondaDeMates";
import {agregarPersonaA} from "../../Funciones/agregar-a-la-ronda";
import {RondaVacia} from "../../Ronda/RondaVacia";

configure({ adapter: new Adapter() });

let rondaDeMates = new RondaDeMates(new RondaVacia());

afterEach(() => {
    rondaDeMates = new RondaDeMates(new RondaVacia())
});

describe('Cuando se ingresa un nombre valido', () => {

    const unNombreValido = 'lalo';

    it('se agrega una persona a la ronda', () => {
        rondaDeMates = agregarPersonaA(rondaDeMates)(unNombreValido);
        expect(rondaDeMates.proximo()).toEqual(unNombreValido);
    })
});

describe('Cuando se ingresa un nombre invalido', () => {
    const unNombreInvalido = '';

    it('no se agrega una persona a la ronda', () => {
        rondaDeMates = agregarPersonaA(rondaDeMates)(unNombreInvalido);
        expect(rondaDeMates.proximo()).toEqual(RondaDeMates.noHayNadie);
    })
});