

const botonSaludar = document.getElementById("btn-saludo");

const mensaje = document.getElementById("mensaje");

const botonLimpiar = document.getElementById("btn-limpiar");

botonSaludar.addEventListener("click", () => {
    mensaje.textContent = "Hola Sebastian, bienvenido al DOM!";
});

botonLimpiar.addEventListener("click", () => {
    mensaje.textContent = "";
});