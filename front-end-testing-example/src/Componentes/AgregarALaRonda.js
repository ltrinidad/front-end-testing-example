import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

export class AgregarALaRonda extends Component {
    render() {
        return (
            <Button className={'boton-agregar'}
                    onClick={this.agregarPersona}
                    children={"Agregar a la ronda de mates"}/>
        )
    }

    agregarPersona = () => {
        if(this.props.personaAAgregar !== "") {
            this.props.agregarPersona(this.props.personaAAgregar)
        }
    }
}