// dynamicCeldas.js

function generarCeldas(tableroId, numCeldas) {
    var tablero = document.getElementById(tableroId);

    for (var i = 1; i <= numCeldas; i++) {
        var celda = document.createElement("div");
        celda.className = "celda";
        celda.id = "celda" + i;
        celda.onclick = function() {
            cambiarEstado(this.id);
            confetti(          
                {
                particleCount: 1000,
                spread: 200,
                startVelocity: 60,
                scalar: 2,
                ticks: 90,
            });
        };

        tablero.appendChild(celda);
    }
}

// Llamada a la función para generar celdas dinámicamente
generarCeldas("tablero1", 60);
generarCeldas("tablero2", 60);
generarCeldas("tablero3", 60);
generarCeldas("tablero4", 60);
generarCeldas("tablero5", 60);

        // Función para generar la ruta de la imagen dinámicamente
        function getImagePath(index) {
            return '../img/' + (index + 1) + '.png';
        }

        // Función para asignar las imágenes dinámicamente
        window.onload = function() {
            var celdas = document.querySelectorAll('.celda');
            celdas.forEach(function(celda, index) {
                celda.style.backgroundImage = 'url(' + getImagePath(index) + ')';
                celda.id = 'celda' + (index + 1); // Asignar IDs autoincrementables
            });
        };