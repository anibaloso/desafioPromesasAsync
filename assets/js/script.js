
const url = ('https://jsonplaceholder.typicode.com/photos');
/**
 * usaremos FETCH API para obtener farmacias de turno
 * 
 * Async/await
 * 
 * try/catch
 */

const consumoAPI = async () => {
    try {
        //si es exito
        let response = await fetch(url)
        // console.log(response)
        const data = await response.json()

        //mostramos con el metodo forEach los 20 primeros registros de la api
        data.slice(0, 20).forEach(element => {
            console.log("🚀 ~ consumoAPI ~ id:", element.id, "title:", element.title)

        });

    } catch (error) {
        //posibles errores
        console.log('error en Fetch')
        console.error(error)
    }

}
function esperarMensaje(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Informacion Enviada')
        }, 3000)
    })
}

async function mostrarMensaje() {
    try {
        const mensaje= await esperarMensaje()
        console.log(mensaje)
        consumoAPI()
    } catch (error) {
        console.error("error al obtener el mensaje",error)
    }
}
