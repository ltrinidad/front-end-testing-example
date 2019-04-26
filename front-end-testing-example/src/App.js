import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {EscribirNombreDePersona} from "./Componentes/EscribirNombreDePersona";
import {RondaDeMates} from "./RondaDeMates";
import {AgregarALaRonda} from "./Componentes/AgregarALaRonda";
import {RondaVacia} from "./Ronda/RondaVacia";
import {sinUltimaLetra} from "./Funciones/letras";
import {Form} from "semantic-ui-react";
import {nombreAPartirDe, rondaAPartirDe} from "./Funciones/palabras";

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
                        <EscribirNombreDePersona valorInicial={this.state.personaAAgregar}
                                                 agregarLetra={this.editarNombre}
                                                 borrarUltimaLetra={this.borrarUltimaLetra}/>
                        <AgregarALaRonda personaAAgregar={this.state.personaAAgregar}
                                         agregarPersona={this.agregarALaRonda}/>
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
        let nuevaRonda = rondaAPartirDe(this.state.rondaDeMates, unaPersona);
        this.setState({
            rondaDeMates: nuevaRonda,
            personaAAgregar: ''
        })
    };

    editarNombre = (nuevaLetra) => {
        this.setState({personaAAgregar: nombreAPartirDe(this.state.personaAAgregar, nuevaLetra)})
    }
}

export default App;

