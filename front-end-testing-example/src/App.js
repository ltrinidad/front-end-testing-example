import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {RondaDeMates} from "./RondaDeMates";
import {AgregarALaRonda} from "./Componentes/AgregarALaRonda";
import {RondaVacia} from "./Ronda/RondaVacia";
import {Form, Input} from "semantic-ui-react";
import {esLaTeclaDeBorrar, esUnaLetra, sinUltimaLetra} from "./Funciones/letras";

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
                        <Input type='text' value={this.state.personaAAgregar} placeholder={"Nombre de la persona..."} className={'input-agregar'} onKeyDown={this.teclaPresionada}/>
                        {/*<EscribirNombreDePersona valorInicial={this.state.personaAAgregar} actualizar={this.agregarLetra} borrarUltimaLetra={this.borrarUltimaLetra}/>*/}
                        <AgregarALaRonda personaAAgregar={this.state.personaAAgregar} agregarPersona={this.agregarALaRonda}/>
                    </Form>
                </header>
            </div>
        );
    }

    teclaPresionada = ({key}) => {
        if(esUnaLetra(key)){
            this.agregarLetra(key)
        } else if(esLaTeclaDeBorrar(key)){
            this.borrarUltimaLetra();
        }
    };

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

