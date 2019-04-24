import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {EscribirNombreDePersona} from "./Componentes/EscribirNombreDePersona";
import {RondaDeMates} from "./RondaDeMates";
import {AgregarALaRonda} from "./Componentes/AgregarALaRonda";
import {RondaVacia} from "./Ronda/RondaVacia";
import {Form} from "semantic-ui-react";
import {sinUltimaLetra} from "./Funciones/letras";

class App extends Component {
    state = {
        rondaDeMates: new RondaDeMates(new RondaVacia()),
        personaAAgregar: ''
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Form>
                        <EscribirNombreDePersona valorInicial={this.state.personaAAgregar} actualizar={this.agregarLetra} borrarUltimaLetra={this.borrarUltimaLetra}/>
                        <AgregarALaRonda personaAAgregar={this.state.personaAAgregar} agregarPersona={this.agregarALaRonda}/>
                    </Form>
                </header>
            </div>
        );
    }

    borrarUltimaLetra = () => {
        this.setState({
            personaAAgregar: sinUltimaLetra(this.state.personaAAgregar)
        })
    };

    agregarALaRonda = (unaPersona) => {
        let nuevaRonda = this.state.rondaDeMates.agregar(unaPersona);
        this.setState({
            rondaDeMates: nuevaRonda,
            personaAAgregar: ''
        })
    };

    agregarLetra = (nuevaLetra) => {
        this.setState({personaAAgregar: this.state.personaAAgregar.concat(nuevaLetra).trim()})
    }
}

export default App;

