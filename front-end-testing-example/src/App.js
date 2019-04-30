import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {EscribirNombreDePersona} from "./Componentes/EscribirNombreDePersona";
import {RondaDeMates} from "./RondaDeMates";
import {AgregarALaRonda} from "./Componentes/AgregarALaRonda";
import {RondaVacia} from "./Ronda/RondaVacia";
import {Form, Table} from "semantic-ui-react";
import {sinUltimaLetra} from "./Funciones/letras";
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
                                                 agregarLetra={this.agregarLetra}
                                                 borrarUltimaLetra={this.borrarUltimaLetra}/>
                        <AgregarALaRonda personaAAgregar={this.state.personaAAgregar}
                                         agregarPersona={this.agregarALaRonda}/>
                    </Form>
                    <div>
                        <Table celled stackable size={"small"}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Participantes</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    this.state.rondaDeMates.participantes().map(participante =>
                                        <Table.Row><Table.Cell>{participante}</Table.Cell></Table.Row>)
                                }
                            </Table.Body>
                        </Table>
                    </div>
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
        let nuevaRonda = rondaAPartirDe(this.state.rondaDeMates, this.state.personaAAgregar);
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