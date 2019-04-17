import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {EscribirNombreDePersona} from "./Componentes/EscribirNombreDePersona";
import {RondaDeMates} from "./RondaDeMates";
import {AgregarALaRonda} from "./Componentes/AgregarALaRonda";
import {RondaVacia} from "./Ronda/RondaVacia";
import {rondaAPartirDe} from "./Funciones/agregar-a-la-ronda";
import {nombreAPartirDe} from "./Funciones/escribir-nombre-de-persona";

class App extends Component {
    state = {
        rondaDeMates: new RondaDeMates(new RondaVacia()),
        personaAAgregar: ''
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <EscribirNombreDePersona valorInicial={this.state.personaAAgregar} agregarLetra={this.agregarLetra}/>
                    <AgregarALaRonda personaAAgregar={this.state.personaAAgregar} agregarPersona={this.agregarALaRonda}/>
                </header>
            </div>
        );
    }

    agregarALaRonda = (unaPersona) => {
        let nuevaRonda = rondaAPartirDe(this.state.rondaDeMates, unaPersona);
        this.setState({
            rondaDeMates: nuevaRonda,
            personaAAgregar: ''
        })
    };

    agregarLetra = (nuevaLetra) => {
        this.setState({personaAAgregar: nombreAPartirDe(this.state.personaAAgregar, nuevaLetra)})
    }
}

export default App;

