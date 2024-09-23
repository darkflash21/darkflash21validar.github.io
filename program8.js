function calcularUtilidad() {
    const salarioMensualInput = document.getElementById("salarioMensual").value;
    const antiguedadInput = document.getElementById("antiguedad").value;
    const resultado = document.getElementById("resultado");

    // Validar entradas
    if (!/^\d+(\.\d+)?$/.test(salarioMensualInput) || !/^\d+$/.test(antiguedadInput)) {
        resultado.textContent = "Por favor, ingresa valores válidos.";
        resultado.style.color = "red";
        return;
    }

    const salarioMensual = parseFloat(salarioMensualInput);
    const antiguedad = parseInt(antiguedadInput);

    if (salarioMensual <= 0 || antiguedad < 0) {
        resultado.textContent = "El salario mensual debe ser positivo y la antigüedad no puede ser negativa.";
        resultado.style.color = "red";
        return;
    }

    let porcentajeUtilidad;

    // Determinar porcentaje de utilidad según antigüedad
    if (antiguedad < 1) {
        porcentajeUtilidad = 0.05; // 5% para menos de 1 año
    } else if (antiguedad < 2) {
        porcentajeUtilidad = 0.07; // 7% para 1 año o más y menos de 2
    } else if (antiguedad < 5) {
        porcentajeUtilidad = 0.10; // 10% para 2 años o más y menos de 5
    } else if (antiguedad < 10) {
        porcentajeUtilidad = 0.15; // 15% para 5 años o más y menos de 10
    } else {
        porcentajeUtilidad = 0.20; // 20% para 10 años o más
    }

    // Calcular utilidad
    const utilidad = salarioMensual * porcentajeUtilidad;

    resultado.textContent = `La utilidad anual es: $${utilidad.toFixed(2)}`;
    resultado.style.color = "green";
}
