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

const headerDeLaTabla = 'Participantes';

describe('Cuando inicia la aplicacion', () => {
    it('puedo ingresar el nombre de una persona y esta se agrega a la ronda', () => {
        const unNombreValido = 'lalo';

        agregarUnaPersona(app, unNombreValido);

        expect(app.state().rondaDeMates.proximo().nombre).toEqual(unNombreValido);
    });

    it('en la tabla de nombres solo se muestra el titulo, y la primera fila es vacia', () => {
        const filasDeLaTabla = app.find('TableRow');

        expect(filasDeLaTabla.length).toEqual(2);
        expect(filasDeLaTabla.first().find('TableCell').text()).toEqual(headerDeLaTabla);
        expect(filasDeLaTabla.last().find('TableCell').text()).toEqual('Turno de: ');
    });

    it('tanto el boton de cebar como el boton de tomar estan deshabilitados', () => {
        const botonCebar = botonDeCebar(app);
        const botonTomar = botonDeTomar(app);

        expect(botonCebar.props.disabled).toBe(true);
        expect(botonTomar.props.disabled).toBe(true)
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

        const filasDeLaTabla = app.find('TableRow');

        expect(filasDeLaTabla.length).toEqual(2);

        expect(filasDeLaTabla.first().find('TableCell').text()).toEqual(headerDeLaTabla);
        expect(filasDeLaTabla.last().find('TableCell').text()).toContain(unNombreValido);
    });

    it('el boton de cebar esta habilitado, pero el boton de tomar esta deshabilitado', () => {
        agregarUnaPersona(app, unNombreValido);

        expect(botonDeCebar(app).props.disabled).toBe(false);
        expect(botonDeTomar(app).props.disabled).toBe(true)
    });

    describe('y se ceba un mate', () => {
        it('el boton de cebar esta deshabilitado, pero el boton de tomar esta habilitado', () => {
            agregarUnaPersona(app, unNombreValido);
            cebar(app);

            expect(botonDeCebar(app).props.disabled).toBe(true);
            expect(botonDeTomar(app).props.disabled).toBe(false)
        });
    })
});

describe('Luego de que se agregaron dos personas', () => {
    const primero = 'lalo';
    const segundo = 'joel';

    it('en la tabla aparece como primero el primero que se agrego, por lo tanto es su turno', () => {
        agregarUnaPersona(app, primero);
        agregarUnaPersona(app, segundo);
        const filasDeLaTabla = app.find('TableRow');

        expect(filasDeLaTabla.length).toEqual(3);

        expect(filasDeLaTabla.at(1).find('TableCell').text()).toContain(primero);
        expect(filasDeLaTabla.at(2).find('TableCell').text()).toEqual(segundo);
    });

    describe('y el primero toma un mate', () => {
        it('en la tabla aparece como primero el segundo que se agrego, por lo tanto es su turno', () => {
            agregarUnaPersona(app, primero);
            agregarUnaPersona(app, segundo);

            const filasDeLaTabla = app.find('TableRow');

            expect(filasDeLaTabla.length).toEqual(3);
            cebar(app);
            tomar(app);

            expect(filasDeLaTabla.at(1).find('TableCell').text()).toContain(segundo);
            expect(filasDeLaTabla.at(2).find('TableCell').text()).toEqual(primero);
        });

        it('hay que cebar para que tome el segundo', () => {
            agregarUnaPersona(app, primero);
            agregarUnaPersona(app, segundo);

            const filasDeLaTabla = app.find('TableRow');

            expect(filasDeLaTabla.length).toEqual(3);
            cebar(app);
            tomar(app);

            expect(botonDeCebar(app).props.disabled).toBe(false);
            expect(botonDeTomar(app).props.disabled).toBe(true);
        });
    });
});

function agregarUnaPersona(componente, unNombreValido) {
    let input = componente.find('EscribirNombreDePersona Input').instance();
    [...unNombreValido].forEach((letra) => input.props.onKeyDown({key: letra}));
    let boton = componente.find('AgregarALaRonda').find('Button').instance();
    boton.props.onClick();
    componente.update()
}

function botonDeCebar(componente) {
    return componente.find('[tipo="cebar"]').first().instance();
}

function cebar(componente) {
    let boton = botonDeCebar(componente);
    boton.props.onClick();
    componente.update()
}

function botonDeTomar(componente) {
    return componente.find('[tipo="tomar"]').first().instance();
}

function tomar(componente) {
    let boton = botonDeTomar(componente);
    boton.props.onClick();
    componente.update()
}
