//SIRVE PARA OBSERVAR UN ELEMENTO
//Y NOS DICE SI CAMBIA DE ESTADO O NO

document.addEventListener('DOMContentLoaded', () => {
    //habilitamos intersection observer
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            console.log('ya esta visible');
        }
    })
    //le decimos que elemento vamos a observar
    //y nos dira cuando el elemento .premium estara visible o no
    observer.observe(document.querySelector('.premium'))
})