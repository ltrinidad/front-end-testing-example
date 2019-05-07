const cargarPersonas = jest.fn(() => Promise.resolve(todasLasPersonas));

const todasLasPersonas = [
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

module.exports = 'participantes';