//NOTIFICACIONES NATIVAS DEL DAVEGADOR
// Y MOSTRAR UNA NOTIFICACION PARA RECIBIR NOTIFICACIONES

const notificarBtn = document.querySelector('#notificar')

// preguntamos si quiere recibir notificaciones
notificarBtn.addEventListener('click', () => {
    Notification                    //usamos el api de notificaciones
        .requestPermission()        //metodo que preguntar para dar permisos
        .then(resultado => {
            console.log(`El resultado es ${resultado}`);
        })
})
//notificamos si acepto las notificaciones
const verNotificacion = document.querySelector('#verNotificacion')
verNotificacion.addEventListener('click', () => {

    if (Notification.permission === 'granted') {
        //creamos una notificacion personalizada
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/Purple-and-White.png',
            body: 'aprende buenas practicas'
        })

        notificacion.onclick = function () {
            //es la forma de abrir una url
            window.open('https://codigoconjuan.com')
        }
    }
})