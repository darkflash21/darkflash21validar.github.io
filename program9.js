document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");
    const errorMessage = document.getElementById("errorMessage"); // Elemento para mostrar mensajes de error

    form.addEventListener("submit", (event) => {
        if (!validarFormulario()) {
            event.preventDefault(); // Evitar envío si hay errores
        }
    });

    const campos = ["nombre", "email", "password", "comentarios"];
    campos.forEach(campo => {
        document.getElementById(campo).addEventListener("blur", () => {
            validarCampo(campo);
        });
    });
});

function validarCampo(campo) {
    const input = document.getElementById(campo);
    let valido = true;
    let mensaje = "";

    switch (campo) {
        case "nombre":
            if (!input.value.trim()) {
                mensaje = "El nombre es obligatorio.";
                valido = false;
            }
            break;

        case "email":
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(input.value)) {
                mensaje = "Por favor, introduce un email válido (ejemplo: texto@gmail.com).";
                valido = false;
            }
            break;

        case "password":
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
            if (!passwordPattern.test(input.value)) {
                mensaje = "La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un dígito.";
                valido = false;
            }
            break;

        case "comentarios":
            if (!input.value.trim()) {
                mensaje = "Los comentarios son obligatorios.";
                valido = false;
            } else if (input.value.length > 50) {
                mensaje = "Los comentarios no pueden exceder 50 caracteres.";
                valido = false;
            }
            break;
    }

    mostrarMensaje(mensaje);
    return valido;
}

function validarFormulario() {
    let valido = true;
    const campos = ["nombre", "email", "password", "comentarios"];
    campos.forEach(campo => {
        const input = document.getElementById(campo);
        if (!input.checkValidity() || !validarCampo(campo)) {
            valido = false;
        }
    });
    return valido;
}

function mostrarMensaje(mensaje) {
    const errorMessage = document.getElementById("errorMessage");
    if (mensaje) {
        errorMessage.textContent = mensaje; // Mostrar el mensaje en un elemento específico
        errorMessage.style.display = "block"; // Asegurar que el mensaje es visible
    } else {
        errorMessage.textContent = ""; // Limpiar el mensaje si no hay error
        errorMessage.style.display = "none"; // Ocultar el mensaje
    }
}
