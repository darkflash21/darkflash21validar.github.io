function calcularEdad() {
    const anioNacimiento = document.getElementById("anioNacimiento").value;
    const resultado = document.getElementById("resultado");
    const anioActual = new Date().getFullYear();

    // Validación de entrada: Asegurarse de que sea un número entero positivo
    if (!/^\d+$/.test(anioNacimiento)) {
        resultado.textContent = "Por favor, ingresa un año de nacimiento válido (número entero positivo).";
        resultado.style.color = "red";
        return;
    }

    const anio = parseInt(anioNacimiento);

    if (anio < 1900 || anio > anioActual) {
        resultado.textContent = "Por favor, ingresa un año de nacimiento válido (entre 1900 y el año actual).";
        resultado.style.color = "red";
        return;
    }

    // Cálculo de la edad
    const edad = anioActual - anio;

    resultado.textContent = `Tienes aproximadamente ${edad} años.`;
    resultado.style.color = "green";
}
