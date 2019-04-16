import React, {Component} from 'react';
import {Input} from "semantic-ui-react";

export class EscribirNombreDePersona extends Component {
    render() {
        return (
            <Input value={this.props.valorInicial} placeholder={"Nombre de la persona..."} className={'input-agregar'} onKeyDown={this.teclaPresionada}/>
        )
    }

    teclaPresionada = ({key}) => {
        if(key === 'Backspace'){
            this.props.borrarUltimaLetra();
        } else {
            this.props.actualizar(key)
        }
    }
}