//NOS DICE SI TENEMOS CONECCION A INTERNET O NO
//SIRVE PARA WEBS EN TIEMPO REAL

window.addEventListener('online', actualizarEstado)
window.addEventListener('offline', actualizarEstado)

function actualizarEstado() {
    if (navigator.onLine) {
        console.log('si esta conectado');
    } else {
        console.log('no esta conectado');
    }
}