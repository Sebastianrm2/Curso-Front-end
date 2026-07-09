

const botonSaludar = document.getElementById("btn-saludo");

const mensaje = document.getElementById("mensaje");

const botonLimpiar = document.getElementById("btn-limpiar");

botonSaludar.addEventListener("click", () => {
    mensaje.textContent = "Hola Sebastian, bienvenido al DOM!";
});

botonLimpiar.addEventListener("click", () => {
    mensaje.textContent = "";
});

    const inputNombre = document.getElementById("input-nombre");

    const botonVerificar = document.getElementById("btn-verificar");

    const texto = document.getElementById("resultado-nombre");

    botonVerificar.addEventListener("click", () => {

    const valor = inputNombre.value;

        if ( valor === "" ){
            texto.textContent = "Por favor escribe tu nombre";
    }else{
            texto.textContent = "Hola, " + valor;
    }
        
    });

