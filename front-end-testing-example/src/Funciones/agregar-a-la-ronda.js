export const agregarPersonaA = (unaRondaDeMates) => (unaPersona) => {
    if(unaPersona !== "") {
        unaRondaDeMates.agregar(unaPersona)
    }
};