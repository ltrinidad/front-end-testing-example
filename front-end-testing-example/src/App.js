import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {AgregarALaRonda} from "./Componentes/AgregarALaRonda";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <AgregarALaRonda agregarPersona={this.agregarALaRonda} personaAAgregar={this.state.persona}/>
                </header>
            </div>
        );
    }
}

export default App;

