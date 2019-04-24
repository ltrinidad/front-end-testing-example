export function esUnaLetra(key) {
    return key.length === 1 && key.normalize('NFD').match(/[a-z]/i)
}

export function esLaTeclaDeBorrar(key) {
    return key === 'Backspace';
}

export function sinUltimaLetra(palabra) {
    return palabra.slice(0, palabra.length - 1)
}