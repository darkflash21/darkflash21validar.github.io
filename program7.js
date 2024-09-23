function calcularHorasExtras() {
    const salarioPorHoraInput = document.getElementById("salarioPorHora").value;
    const horasTrabajadasInput = document.getElementById("horasTrabajadas").value;
    const resultado = document.getElementById("resultado");

    // Validar entradas
    if (!/^\d+(\.\d+)?$/.test(salarioPorHoraInput) || !/^\d+$/.test(horasTrabajadasInput)) {
        resultado.textContent = "Por favor, ingresa valores válidos.";
        resultado.style.color = "red";
        return;
    }

    const salarioPorHora = parseFloat(salarioPorHoraInput);
    const horasTrabajadas = parseInt(horasTrabajadasInput);

    if (salarioPorHora <= 0 || horasTrabajadas < 0) {
        resultado.textContent = "El salario por hora debe ser positivo y las horas trabajadas no pueden ser negativas.";
        resultado.style.color = "red";
        return;
    }

    let horasExtras = 0;
    let totalPago = 0;

    if (horasTrabajadas > 40) {
        horasExtras = horasTrabajadas - 40;
        totalPago = 40 * salarioPorHora; // Pago por las primeras 40 horas

        if (horasExtras <= 8) {
            totalPago += horasExtras * salarioPorHora * 2; // Pago por horas extras hasta 8
        } else {
            totalPago += 8 * salarioPorHora * 2; // Pago por las primeras 8 horas extras
            totalPago += (horasExtras - 8) * salarioPorHora * 3; // Pago por el resto de horas extras
        }
    } else {
        totalPago = horasTrabajadas * salarioPorHora; // Pago normal si no hay horas extras
    }

    resultado.textContent = `El total a recibir es: $${totalPago.toFixed(2)}`;
    resultado.style.color = "green";
}
