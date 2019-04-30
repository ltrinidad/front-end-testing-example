import React from "react";
import {configure, mount} from "enzyme";
import App from "../../App";
import Adapter from "enzyme-adapter-react-16/build";

configure({ adapter: new Adapter() });

let app;

beforeEach(() => {
    app = mount(<App/>)
});

afterEach(() => {
    app.unmount()
});

function agregarUnaPersona(componente, unNombreValido) {
    let input = componente.find('Input').instance();
    [...unNombreValido].forEach((letra) => input.props.onKeyDown({key: letra}));
    let boton = componente.find('Button').instance();
    boton.props.onClick();
}

const headerDeLaTabla = 'Participantes';

describe('Cuando inicia la aplicacion', () => {
    it('puedo ingresar el nombre de una persona y esta se agrega a la ronda', () => {
        const unNombreValido = 'lalo';

        agregarUnaPersona(app, unNombreValido);

        expect(app.state().rondaDeMates.proximo()).toEqual(unNombreValido);
    });

    it('en la tabla de nombres solo se muestra el titulo y pero ningun nombre', () => {
        const filasDeLaTabla = app.find('TableRow');

        expect(filasDeLaTabla.length).toEqual(1);
        expect(filasDeLaTabla.first().find('TableCell').text()).toEqual(headerDeLaTabla);
    });
});


describe('Luego de que se agrego una persona', () => {
    const unNombreValido = 'lalo';

    it('permite cargar otro nombre distinto', () => {
        const nombreInicial = app.state().personaAAgregar;

        agregarUnaPersona(app, unNombreValido);

        expect(app.state().personaAAgregar).toEqual(nombreInicial)
    });

    it('el campo para cargar el nombre queda vacio', () => {
        const nombreInicial = app.state().personaAAgregar;

        agregarUnaPersona(app, unNombreValido);

        let input = app.find('Input').instance();

        expect(input.props.value).toEqual(nombreInicial)
    });

    it('en la tabla de nombres se muestra el titulo y una fila con ese nombre', () => {
        agregarUnaPersona(app, unNombreValido);
        app.update();

        const filasDeLaTabla = app.find('TableRow');

        expect(filasDeLaTabla.length).toEqual(2);

        expect(filasDeLaTabla.first().find('TableCell').text()).toEqual(headerDeLaTabla);
        expect(filasDeLaTabla.last().find('TableCell').text()).toEqual(unNombreValido);
    });
});

