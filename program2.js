function calcularComisiones() {
    const sueldoBaseInput = document.getElementById("sueldoBaseInput").value;
    const venta1Input = document.getElementById("venta1Input").value;
    const venta2Input = document.getElementById("venta2Input").value;
    const venta3Input = document.getElementById("venta3Input").value;
    const resultado = document.getElementById("resultado");

    // Validación de entrada para sueldo base
    if (!/^\d+(\.\d+)?$/.test(sueldoBaseInput)) {
        resultado.textContent = "Por favor, ingresa un sueldo base válido (número positivo).";
        resultado.style.color = "red";
        return;
    }
    
    const sueldoBase = parseFloat(sueldoBaseInput);

    // Validación de entradas para las ventas
    const ventas = [venta1Input, venta2Input, venta3Input];
    let totalVentas = 0;

    for (let i = 0; i < ventas.length; i++) {
        if (!/^\d+(\.\d+)?$/.test(ventas[i])) {
            resultado.textContent = `Por favor, ingresa una venta válida (número positivo) en la Venta ${i + 1}.`;
            resultado.style.color = "red";
            return;
        }
        totalVentas += parseFloat(ventas[i]);
    }

    // Cálculo de comisiones
    const comision = totalVentas * 0.10; // 10% de comisiones
    const totalMensual = sueldoBase + comision;

    resultado.textContent = `Comisiones totales: $${comision.toFixed(2)}. Total a recibir en el mes: $${totalMensual.toFixed(2)}.`;
    resultado.style.color = "green";
}
