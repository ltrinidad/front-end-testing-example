import { cargarPersonas } from "../../Funciones/participantes";

test('los nombres de personas tienen key, text y value y las tres propiedades tienen el mismo valor del nombre y el apellido concatenados con un espacio en medio', () => {
    const requesterMockeado = (url) => Promise.resolve({
        json(){
            return Promise.resolve([
                { name: 'r2', surname: 'd2' }
            ]);
        }
    });

    return cargarPersonas(requesterMockeado).then(personasMapeadas => {
        expect(personasMapeadas).toEqual([{ key:'r2 d2', text: 'r2 d2', value: 'r2 d2' }]);
    });
});