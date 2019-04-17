import React, {Component} from 'react';
import {Input} from "semantic-ui-react";

export class EscribirNombreDePersona extends Component {
    render() {
        return (
            <Input type={'text'} value={this.props.valorInicial} placeholder={"Nombre de la persona..."} className={'input-agregar'} onKeyPress={({key}) => this.props.agregarLetra(key)}/>
        )
    }
}