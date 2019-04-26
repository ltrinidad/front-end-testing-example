import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

export class AgregarALaRonda extends Component {
    render() {
        return (
            <Button className={'boton-agregar'}
                    onClick={this.agregar}
                    children={"Agregar a la ronda de mates"}/>
        )
    }

    agregar = () => {
        if(this.props.personaAAgregar !== "") {
            this.props.agregarPersona(this.props.personaAAgregar)
        }
    }
}