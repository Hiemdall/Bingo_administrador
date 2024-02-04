function mostrarVentanaEmergente(imagenSrc) {
    const ventana = document.getElementById('ventana-emergente');
    const imagen = document.getElementById('imagen-ventana-emergente');

    if (ventana && imagen) {
        imagen.src = imagenSrc; // Establece el atributo src de la imagen
        ventana.classList.add('activo'); // Usa classList para coherencia

        // Configura un temporizador para ocultar la ventana emergente después de 10 segundos
        setTimeout(() => {
            ventana.classList.remove('activo'); // Asegúrate de que esta clase controle la visibilidad
        }, 5000); // 000 milisegundos equivalen a 10 segundos
    } else {
        console.error('No se encontró el elemento de la ventana emergente o de la imagen');
    }
}

//function cerrarVentanaEmergente() {
  //  const ventana = document.getElementById('ventana-emergente');
  //  if (ventana) {
  //      ventana.style.display = 'none'; // Oculta la ventana emergente
  //  }
//}

function cambiarEstado(celdaId) {
    const celda = document.getElementById(celdaId);
    
    celda.classList.toggle('activo'); // Cambia la imagen de blanco y negro a color y viceversa


    // Obtén la URL de la imagen de fondo de la celda
    const style = window.getComputedStyle(celda);
    const imageSrc = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    // Mostrar ventana emergente con animación
    mostrarVentanaEmergente(imageSrc);

    // Enviar solicitud para guardar el estado en la base de datos
    fetch('../procesos/guardarEstado.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        //body: `celdaId=${celdaId}`
        body: `celdaId=${celdaId.substring(5)}`
    })


    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function cargarEstadoInicial() {
    // Aquí puedes agregar código para cargar el estado inicial del juego si es necesario
}

function cargarEstadoJuego() {
    fetch('../procesos/obtenerEstado.php')
        .then(response => response.json())
        .then(estadoCeldas => {
            estadoCeldas.forEach(celda => {
                const elementoCelda = document.getElementById(`celda${celda.id}`);
                if (elementoCelda) {
                    // Actualiza el estado de la celda en base a los datos
                    if (celda.estado === '1') { // Asumiendo que '1' significa activo
                        elementoCelda.classList.add('activo');
                    } else {
                        elementoCelda.classList.remove('activo');
                    }
                    // Aquí puedes añadir más lógica si necesitas configurar algo más basado en el estado
                }
            });
        })
        .catch(error => console.error('Error:', error));
}


document.addEventListener('DOMContentLoaded', () => {
    cargarEstadoInicial();
    cargarEstadoJuego();
});
