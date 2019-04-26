export const nombreAPartirDe = (unNombre, letra) =>  unNombre.concat(letra).trim();

export const rondaAPartirDe = (unaRondaDeMates, unaPersona) => (unaPersona !== "") ? unaRondaDeMates.agregar(unaPersona) : unaRondaDeMates;