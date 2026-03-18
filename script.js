const regalo = document.getElementById('regalo');
const pantallaInicio = document.getElementById('pantalla-inicio');
const tarjeta = document.getElementById('tarjeta');
const btnReiniciar = document.getElementById('btnReiniciar');

// NUEVOS ELEMENTOS JS
const btnVerFoto = document.getElementById('btnVerFoto');
const contenedorFoto = document.getElementById('contenedor-foto');

// Función para lanzar confeti (se mantiene igual)
function lanzarConfeti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#ffffff']
    });
}

// Evento al abrir el regalo
regalo.addEventListener('click', () => {
    pantallaInicio.classList.add('oculto');
    tarjeta.classList.remove('oculto');
    tarjeta.classList.add('mostrar');
    
    lanzarConfeti();
    
    // Lanzar un poco más de confeti después de 1 segundo
    setTimeout(lanzarConfeti, 1000);
});

// NUEVA LÓGICA PARA LA FOTO
btnVerFoto.addEventListener('click', () => {
    // Mostramos la foto
    contenedorFoto.classList.remove('oculto');
    contenedorFoto.classList.add('mostrar');
    
    // Ocultamos el botón para que no se pulse dos veces
    btnVerFoto.classList.add('oculto');
    
    // ¡Un poco más de confeti para celebrar la foto familiar!
    lanzarConfeti();
});

// Botón para volver al inicio
btnReiniciar.addEventListener('click', () => {
    location.reload(); 
});
