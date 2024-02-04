// anuncio.js
document.addEventListener("DOMContentLoaded", function() {
    cargarAnuncios();
});

function cargarAnuncios() {
    // Ruta al archivo HTML de anuncios
    var rutaAnuncios = './anuncios/anuncios.html';

    // Obtener el contenido del archivo HTML de anuncios
    fetch(rutaAnuncios)
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido en el contenedor de anuncios
            var contenedorAnuncios = document.getElementById("anuncios-container");
            contenedorAnuncios.innerHTML = data;

            // Agregar el botón de cierre
            agregarBotonCerrar();
        })
        .catch(error => console.error('Error al cargar los anuncios:', error));
}

function agregarBotonCerrar() {
    // Crear el botón de cierre
    var botonCerrar = document.createElement("span");
    botonCerrar.className = "cerrar-anuncio";
    botonCerrar.textContent = "X";
    botonCerrar.onclick = cerrarAnuncio;

    // Obtener el contenedor de anuncios
    var contenedorAnuncios = document.getElementById("anuncios-container");

    // Agregar el botón de cierre al contenedor de anuncios
    contenedorAnuncios.appendChild(botonCerrar);
}

function cerrarAnuncio() {
    var contenedorAnuncios = document.getElementById("anuncios-container");
    contenedorAnuncios.style.display = "none";
}
