import React, {Component} from 'react';
import {Input} from "semantic-ui-react";

export class EscribirNombreDePersona extends Component {
    render() {
        return (
            <Input value={this.props.valorInicial} placeholder={"Nombre de la persona..."} className={'input-agregar'} onChange={(event, data) => this.seAgregoUnaLetra(data.value)}/>
        )
    }

    seAgregoUnaLetra = (unaLetra) => {
        this.props.agregarLetra(unaLetra)
    }
}