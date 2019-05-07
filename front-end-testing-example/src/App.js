import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {RondaVacia} from "./Ronda/RondaVacia";
import {Button, Grid, Label, Table} from "semantic-ui-react";
import {RondaDeMates} from "./Componentes/RondaDeMates";
import {rondaAPartirDe, cargarPersonas} from "./Funciones/participantes";
import {SelectorDePersonas} from "./Componentes/SelectorDePersonas";



class App extends Component {
    state = {
        rondaDeMates: new RondaDeMates(new RondaVacia()),
        mateCebado: false,
        personas: []
    };

    componentDidMount() {
       cargarPersonas().then(personas => this.setState({personas}))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Grid columns={2} stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <SelectorDePersonas agregar={this.agregarALaRonda} personas={this.state.personas}/>
                                <br/>
                                <Button tipo={'tomar'} onClick={this.avanzarEnLaRonda}
                                        disabled={!this.state.mateCebado}>Tomar</Button>
                                <Button tipo={'cebar'} onClick={this.cebar}
                                        disabled={this.state.rondaDeMates.participantes().length === 0 || this.state.mateCebado}>Cebar</Button>
                            </Grid.Column>
                            <Grid.Column>
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
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                </header>
            </div>
        );
    }

    primeraFila() {
        return <Table.Row positive><Table.Cell><Label ribbon>Turno
            de: </Label>{this.state.rondaDeMates.participantes()[0]}</Table.Cell></Table.Row>;
    }

    restoDeLasFilas() {
        return this.state.rondaDeMates.participantes().slice(1).map((participante, index) =>
            <Table.Row key={index} negative><Table.Cell>{participante}</Table.Cell></Table.Row>);
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

    agregarALaRonda = (persona) => {
        let nuevaRonda = rondaAPartirDe(this.state.rondaDeMates, persona);
        this.setState((prevState) => ({
            ...prevState,
            rondaDeMates: nuevaRonda
        }))
    };
}

export default App;