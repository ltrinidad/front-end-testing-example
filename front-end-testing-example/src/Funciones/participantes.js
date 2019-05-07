export const rondaAPartirDe = (unaRondaDeMates, unaPersona) => (unaPersona !== "") ? unaRondaDeMates.agregar(unaPersona) : unaRondaDeMates;

export const cargarPersonas = (requester = fetch) => {
    return requester('https://uinames.com/api/?amount=10&region=argentina')
        .then((response) => response.json())
        .then(res => res.map(persona => {
                let nombreCompleto = persona.name + ' ' + persona.surname;
                return {
                    key: nombreCompleto, text: nombreCompleto, value: nombreCompleto
                }
            }
        ))
};

