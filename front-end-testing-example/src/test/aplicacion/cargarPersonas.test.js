import { cargarPersonas } from "../../Funciones/participantes";

test('se obtienen los nombres de personas', () => {
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