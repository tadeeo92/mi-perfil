document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let imagenActual = 0;

const imagenes = [
    '/img/foto2.webp',
    'imagen2.jpg',
    'imagen3.jpg'
];

function cambiarImagen(direccion) {
    imagenActual += direccion;

    if (imagenActual < 0) {
        imagenActual = imagenes.length - 1;
    } else if (imagenActual >= imagenes.length) {
        imagenActual = 0;
    }

    document.getElementById('imagen-carrusel').src = imagenes[imagenActual];
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('imagen-carrusel').src = imagenes[imagenActual];
});
