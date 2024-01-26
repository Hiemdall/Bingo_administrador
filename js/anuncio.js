// anuncio.js
document.addEventListener("DOMContentLoaded", function() {
    cargarAnuncios();
});

function cargarAnuncios() {
    // En este ejemplo, simplemente creamos un anuncio de demostración.
    var anuncioHTML = '<div class="anuncio">¡Tu anuncio aquí!<span class="cerrar-anuncio" onclick="cerrarAnuncio()">X</span></div>';

    // Agrega el anuncio al contenedor
    var contenedorAnuncios = document.getElementById("anuncios-container");
    contenedorAnuncios.innerHTML = anuncioHTML;
}

function cerrarAnuncio() {
    var contenedorAnuncios = document.getElementById("anuncios-container");
    contenedorAnuncios.style.display = "none";
}
