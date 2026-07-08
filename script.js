

const boton = document.getElementById("btn-saludo");

const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
    mensaje.textContent = "Hola Sebastian, bienvenido al DOM!";
});