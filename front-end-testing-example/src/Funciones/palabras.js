export const nombreAPartirDe = (unNombre, tecla) =>  unNombre.concat(tecla).trim();

export const rondaAPartirDe = (unaRondaDeMates, unaPersona) => (unaPersona !== "") ? unaRondaDeMates.agregar(unaPersona) : unaRondaDeMates;