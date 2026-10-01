const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentosRestantes = 10;

const inputNumero = document.getElementById("NumeroUsuario");
const boton = document.getElementById("botonProbar");
const textoIntentos = document.getElementById("intentos");
const textoMensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
    const numeroIngresado = Number(inputNumero.value);
    if (!numeroIngresado) {
        textoMensaje.textContent = "Por favor, ingrese un número válido.";
        return;
    }

    if (numeroIngresado === numeroSecreto) {
        textoMensaje.textContent = "¡Felicidades! Adivinaste el número.";
        boton.disabled = true;
        return;
    }

    intentosRestantes--;
    textoIntentos.textContent = intentosRestantes

    if (numeroIngresado < numeroSecreto) {
        textoMensaje.textContent = "¡Incorrecto! El número secreto es MAYOR.";
    } else {
        textoMensaje.textContent = "¡Incorrecto! El número secreto es MENOR.";
    }

    if (intentosRestantes === 0) {
        textoMensaje.textContent = `¡El juego ha terminado! El número era ${numeroSecreto}.`;
        boton.disabled = true;
    }

    inputNumero.value = "";
});