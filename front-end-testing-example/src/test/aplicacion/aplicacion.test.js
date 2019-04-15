import React from "react";
import {configure, mount} from "enzyme";
import App from "../../App";
import Adapter from "enzyme-adapter-react-16/build";

configure({ adapter: new Adapter() });

let componente;

afterEach(() => {
    componente.unmount()
});

describe('Cuando inicia la aplicacion', () => {
    it('puedo ingresar el nombre de una persona y esta se agrega a la ronda', () => {
        const unNombreValido = 'lalo';
        componente = mount(<App/>);

        let input = componente.find('Input').instance();
        [...unNombreValido].forEach((letra) => input.props.onChange({}, {value: letra}));
        let boton = componente.find('Button').instance();
        boton.props.onClick();

        expect(componente.state().rondaDeMates.proximo()).toEqual(unNombreValido);
    });
});
