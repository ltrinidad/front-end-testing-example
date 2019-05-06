import React, {Component} from 'react';
import {Dropdown} from "semantic-ui-react";

export class SelectorDePersonas extends Component {
    render() {
        return (
            <Dropdown search options={this.props.personas} text={"Nombre de la persona..."} className={'seleccionar-nombre'} onChange={(event, {value}) => this.props.agregar(value)}/>
        )
    }
}