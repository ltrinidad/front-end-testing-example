import React, {Component} from 'react';
import {Input} from "semantic-ui-react";
import {esLaTeclaDeBorrar, esUnaLetra} from "../funciones/letras";

export class EscribirNombreDePersona extends Component {
    render() {
        return (
            <Input value={this.props.valorInicial} placeholder={"Nombre de la persona..."} className={'input-agregar'} onKeyDown={this.teclaPresionada}/>
        )
    }

    teclaPresionada = ({key}) => {
        if(esUnaLetra(key)){
            this.props.actualizar(key)
        } else if(esLaTeclaDeBorrar(key)){
            this.props.borrarUltimaLetra();
        }
    };
}