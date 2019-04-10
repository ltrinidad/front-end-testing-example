import React, {Component} from 'react';
import {Button, Grid, Input} from "semantic-ui-react";

export class AgregarALaRonda extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Input focus placeholder={'Nombre de la persona...'} className={'input-agregar'}/>
                    <Button className={'boton-agregar'} children={"Agregar a la ronda de mates"}/>
                </Grid.Row>
            </Grid>
        )
    }
}