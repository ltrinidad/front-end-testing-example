import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SelectorDePersonas} from "../../Componentes/SelectorDePersonas";
import {rondaAPartirDe} from "../../Funciones/participantes";
import {RondaDeMates} from "../../Componentes/RondaDeMates";
import {RondaVacia} from "../../Ronda/RondaVacia";

configure({ adapter: new Adapter() });

let personas = [
    {
        key: 'unaPersona',
        text: 'unaPersona',
        value: 'unaPersona'
    },
    {
        key: 'otraPersona',
        text: 'otraPersona',
        value: 'otraPersona',
    }
];

function rondaVacia() {
    return new RondaDeMates(new RondaVacia());
}

let rondaDeMates;

const agregarPersonaALaRonda = (unaPersona) => {rondaDeMates = rondaAPartirDe(rondaDeMates, unaPersona)};

let componenteSelectorDePersonas = <SelectorDePersonas agregar={agregarPersonaALaRonda} personas={personas}/>;

beforeEach(() => {
    rondaDeMates = rondaVacia();
    componente = shallow(componenteSelectorDePersonas)
});

let componente = shallow(componenteSelectorDePersonas);
let dropdown = componente.find('.seleccionar-nombre');

it('El componente tiene solo un selector', () => {
    expect(dropdown).toHaveLength(1);
});

describe('cuando se selecciona un nombre', () => {
    const nombreSeleccionado = personas[0].value;

    it('se agrega como persona seleccionada', () => {
        dropdown.simulate('change', {}, {value: nombreSeleccionado});

        expect(rondaDeMates.tomadorActual()).toEqual(nombreSeleccionado);
    });

    describe('y luego se selecciona otro', () => {
        const nombreSeleccionado = personas[1].value;

        it('se agrega luego de la primera persona seleccionada', () => {
            dropdown.simulate('change', {}, {value: nombreSeleccionado});

            expect(rondaDeMates.avanzarTurno().tomadorActual()).toEqual(nombreSeleccionado);
        });
    });
});
