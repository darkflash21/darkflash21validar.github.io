function calcularInversion() {
    const capitalInput = document.getElementById("capitalInput").value;
    const resultado = document.getElementById("resultado");
    const interesMensual = 0.02;

    
    if (!/^\d+$/.test(capitalInput)) {
        resultado.textContent = "Por favor, ingresa un monto válido (número entero positivo).";
        resultado.style.color = "red";
        return;
    }

    const capital = parseInt(capitalInput);

    
    const ganancia = capital * interesMensual;
    const total = capital + ganancia;

    resultado.textContent = `Invirtiendo $${capital}, ganarás $${ganancia.toFixed(2)} después de un mes. Total: $${total.toFixed(2)}`;
    resultado.style.color = "green";
}
