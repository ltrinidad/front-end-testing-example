export const rondaAPartirDe = (unaRondaDeMates, unaPersona) => (unaPersona !== "") ? unaRondaDeMates.agregar(unaPersona) : unaRondaDeMates;

export const cargarPersonas = () => {
    return fetch('https://uinames.com/api/?amount=10&region=argentina')
        .then((response) => response.json())
        .then(res => res.map(persona => {
                let nombreCompleto = persona.name + ' ' + persona.surname;
                return {
                    key: nombreCompleto, text: nombreCompleto, value: nombreCompleto
                }
            }
        ))
};

export const todasLasPersonas =
    [
        {
            key: 'feche',
            text: 'feche',
            value: 'feche'
        },
        {
            key: 'gise',
            text: 'gise',
            value: 'gise',
        },
        {
            key: 'seryo',
            text: 'seryo',
            value: 'seryo',
        },
        {
            key: 'cris',
            text: 'cris',
            value: 'cris',
        },
        {
            key: 'lalo',
            text: 'lalo',
            value: 'lalo',
        },
        {
            key: 'gian',
            text: 'gian',
            value: 'gian',
        },
        {
            key: 'santi',
            text: 'santi',
            value: 'santi',
        },
    ];