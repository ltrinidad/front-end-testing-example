import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {RondaDeMates} from "../../Componentes/RondaDeMates";
import {RondaVacia} from "../../Ronda/RondaVacia";
import {rondaAPartirDe} from "../../Funciones/participantes";

configure({ adapter: new Adapter() });

let rondaDeMates = new RondaDeMates(new RondaVacia());

afterEach(() => {
    rondaDeMates = new RondaDeMates(new RondaVacia())
});

describe('Cuando se ingresa un nombre valido', () => {

    const unNombreValido = 'lalo';

    it('se agrega una persona a la ronda', () => {
        rondaDeMates = rondaAPartirDe(rondaDeMates, unNombreValido);
        expect(rondaDeMates.avanzarTurno().tomadorActual()).toEqual(unNombreValido);
    })
});

describe('Cuando se ingresa un nombre invalido', () => {
    const unNombreInvalido = '';

    it('no se agrega una persona a la ronda', () => {
        rondaDeMates = rondaAPartirDe(rondaDeMates, unNombreInvalido);
        expect(rondaDeMates.avanzarTurno().tomadorActual()).toEqual(RondaDeMates.noHayNadie);
    })
});