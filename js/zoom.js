// Variables para seguimiento del movimiento y zoom
let isDragging = false;
let startX, startY;
let translateX = 0, translateY = 0;
let scale = 1;

const contenedor = document.querySelector('.contenedor');

// Evento para iniciar el arrastre
contenedor.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    contenedor.style.cursor = 'grabbing';
});

// Evento para detener el arrastre
document.addEventListener('mouseup', () => {
    isDragging = false;
    contenedor.style.cursor = 'grab';
});

// Evento para mover el contenedor
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;

    setTransform();
});

// Evento de rueda del ratón para hacer zoom
document.addEventListener('wheel', (e) => {
    const scaleFactor = e.deltaY > 0 ? 0.9 : 1.1; // Escala hacia adentro o hacia afuera

    scale *= scaleFactor;
    translateX *= scaleFactor;
    translateY *= scaleFactor;

    setTransform();
});

// Función para aplicar la transformación al contenedor
function setTransform() {
    contenedor.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}
