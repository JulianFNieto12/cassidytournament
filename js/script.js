// Función para actualizar el contador
function actualizarContador() {
    // Fecha objetivo: 25 de mayo de 2024
    var fechaObjetivo = new Date('2024-05-25T00:00:00');
    // Fecha actual
    var fechaActual = new Date();

    // Calcular la diferencia de tiempo en milisegundos
    var diferencia = fechaObjetivo - fechaActual;

    // Calcular el tiempo restante en días, horas, minutos y segundos
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el contador en el elemento HTML
    var contadorElemento = document.getElementById('contador');
    contadorElemento.innerHTML = dias + ' días, ' + horas + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos';
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

// Inicializar el contador al cargar la página
actualizarContador();

window.onload = function() {
    var audio = document.getElementById("audio");
    audio.play();
};

document.addEventListener('click', function() {
    var audio = document.getElementById("audio");
    audio.play();
});