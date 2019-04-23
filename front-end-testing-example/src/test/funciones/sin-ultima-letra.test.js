import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {sinUltimaLetra} from "../../Funciones/letras";

configure({ adapter: new Adapter() });

describe('Dada una palabra vacia', () => {
    const palabraVacia = '';

    it('el resultado de borrar la ultima letra es una misma palabra vacia', () => {
        const nuevaPalabra = sinUltimaLetra(palabraVacia);
        expect(nuevaPalabra).toEqual(palabraVacia);
    })
});

describe('Dada una palabra invalida', () => {
    const palabraInvalida = undefined;

    it('se produce un error porque no hay resultado posible', () => {
        try {
            sinUltimaLetra(palabraInvalida);
            throw new Error();
        } catch (e) {
            expect(e.message).toContain(palabraInvalida);
        }
    })
});

describe('Dada una palabra no vacia', () => {
    const ultimaLetra = 'a';
    let todoMenosUltimaLetra = 'unaPalabr';
    const palabraNoVacia = todoMenosUltimaLetra + ultimaLetra;

    it('el resultado de borrar la ultima letra es la palabra sin la ultima letra', () => {
        const nuevaPalabra = sinUltimaLetra(palabraNoVacia);
        expect(nuevaPalabra).toEqual(todoMenosUltimaLetra);
    })
});