document.addEventListener("DOMContentLoaded", function() {
    var contenedor = document.getElementById("tablero");
    var numCeldas = 60;

    for (var i = 1; i <= numCeldas; i++) {
        var nuevaCelda = document.createElement("div");
        nuevaCelda.className = "celda";
        nuevaCelda.classList.add("celda" + i); // Agrega una clase específica para cada celda
        contenedor.appendChild(nuevaCelda);

        // Genera una imagen dinámica para cada celda (puedes personalizar esto según tus necesidades)
        var imagenIndex = i % 60 + 1; // Cambia esto según el número de imágenes que tengas
        nuevaCelda.style.backgroundImage = `url('img/${imagenIndex}.png')`;

        // Agrega el evento onclick a cada celda
        nuevaCelda.addEventListener("click", function() {
            var id = this.classList[1]; // Obtén la clase específica de la celda
            cambiarEstado(id); // Llama a la función cambiarEstado con el ID correspondiente
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var contenedor = document.getElementById("tablero2");
    var numCeldas = 60;

    for (var i = 1; i <= numCeldas; i++) {
        var nuevaCelda = document.createElement("div");
        nuevaCelda.className = "celda";
        nuevaCelda.classList.add("celda" + i); // Agrega una clase específica para cada celda
        contenedor.appendChild(nuevaCelda);

        // Genera una imagen dinámica para cada celda (puedes personalizar esto según tus necesidades)
        var imagenIndex = i % 60 + 1; // Cambia esto según el número de imágenes que tengas
        nuevaCelda.style.backgroundImage = `url('img/${imagenIndex}.png')`;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var contenedor = document.getElementById("tablero3");
    var numCeldas = 60;

    for (var i = 1; i <= numCeldas; i++) {
        var nuevaCelda = document.createElement("div");
        nuevaCelda.className = "celda";
        nuevaCelda.classList.add("celda" + i); // Agrega una clase específica para cada celda
        contenedor.appendChild(nuevaCelda);

        // Genera una imagen dinámica para cada celda (puedes personalizar esto según tus necesidades)
        var imagenIndex = i % 60 + 1; // Cambia esto según el número de imágenes que tengas
        nuevaCelda.style.backgroundImage = `url('img/${imagenIndex}.png')`;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var contenedor = document.getElementById("tablero4");
    var numCeldas = 60;

    for (var i = 1; i <= numCeldas; i++) {
        var nuevaCelda = document.createElement("div");
        nuevaCelda.className = "celda";
        nuevaCelda.classList.add("celda" + i); // Agrega una clase específica para cada celda
        contenedor.appendChild(nuevaCelda);

        // Genera una imagen dinámica para cada celda (puedes personalizar esto según tus necesidades)
        var imagenIndex = i % 60 + 1; // Cambia esto según el número de imágenes que tengas
        nuevaCelda.style.backgroundImage = `url('img/${imagenIndex}.png')`;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var contenedor = document.getElementById("tablero5");
    var numCeldas = 60;

    for (var i = 1; i <= numCeldas; i++) {
        var nuevaCelda = document.createElement("div");
        nuevaCelda.className = "celda";
        nuevaCelda.classList.add("celda" + i); // Agrega una clase específica para cada celda
        contenedor.appendChild(nuevaCelda);

        // Genera una imagen dinámica para cada celda (puedes personalizar esto según tus necesidades)
        var imagenIndex = i % 60 + 1; // Cambia esto según el número de imágenes que tengas
        nuevaCelda.style.backgroundImage = `url('img/${imagenIndex}.png')`;
    }
});
