import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {EscribirNombreDePersona} from "./Componentes/EscribirNombreDePersona";
import {AgregarALaRonda} from "./Componentes/AgregarALaRonda";
import {RondaVacia} from "./Ronda/RondaVacia";
import {Button, Form, Label, Table} from "semantic-ui-react";
import {sinUltimaLetra} from "./Funciones/letras";
import {RondaDeMates} from "./Componentes/RondaDeMates";
import {nombreAPartirDe, rondaAPartirDe} from "./Funciones/participantes";

class App extends Component {
    state = {
        rondaDeMates: new RondaDeMates(new RondaVacia()),
        personaAAgregar: '',
        mateCebado: false
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Form>
                        <EscribirNombreDePersona valorInicial={this.state.personaAAgregar}
                                                 agregarLetra={this.agregarLetra}
                                                 borrarUltimaLetra={this.borrarUltimaLetra}/>
                        <AgregarALaRonda agregarPersona={this.agregarALaRonda}/>
                    </Form>
                    <div>
                        <Table celled stackable size={"small"}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Participantes</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {this.primeraFila()}
                                {this.restoDeLasFilas()}
                            </Table.Body>
                        </Table>
                    </div>
                    <Button tipo={'tomar'} onClick={this.avanzarEnLaRonda} disabled={!this.state.mateCebado}>Tomar</Button>
                    <Button tipo={'cebar'} onClick={this.cebar} disabled={this.state.rondaDeMates.participantes().length === 0 || this.state.mateCebado}>Cebar</Button>
                </header>
            </div>
        );
    }

    primeraFila() {
        return <Table.Row positive><Table.Cell><Label ribbon>Turno
            de: </Label>{this.state.rondaDeMates.participantes()[0]}</Table.Cell></Table.Row>;
    }

    restoDeLasFilas() {
        return this.state.rondaDeMates.participantes().slice(1).map(participante =>
            <Table.Row negative><Table.Cell>{participante}</Table.Cell></Table.Row>);
    }

    avanzarEnLaRonda = () => {
        this.setState({
            rondaDeMates: this.state.rondaDeMates.avanzarTurno(),
            mateCebado: false
        })
    };

    cebar = () => {
        this.setState({
            mateCebado: true
        })
    };

    borrarUltimaLetra = () => {
        this.setState({
            personaAAgregar: sinUltimaLetra(this.state.personaAAgregar)
        })
    };

    agregarALaRonda = () => {
        let nuevaRonda = rondaAPartirDe(this.state.rondaDeMates, this.state.personaAAgregar);
        this.setState((prevState) => ({
            ...prevState,
            rondaDeMates: nuevaRonda,
            personaAAgregar: ''
        }))
    };

    agregarLetra = (nuevaLetra) => {
        this.setState({personaAAgregar: nombreAPartirDe(this.state.personaAAgregar, nuevaLetra)})
    }
}

export default App;