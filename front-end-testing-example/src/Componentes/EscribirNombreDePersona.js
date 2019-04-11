import React, {Component} from 'react';
import {Input} from "semantic-ui-react";

export class EscribirNombreDePersona extends Component {
    render() {
        return (
            <Input placeholder={"Nombre de la persona..."} className={'input-agregar'} onChange={(event, data) => this.actualizarNombre(data.value)}/>
        )
    }

    actualizarNombre = (unaLetra) => {
        this.props.actualizar(unaLetra)
    }
}