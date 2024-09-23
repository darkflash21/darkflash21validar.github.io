function calcularDescuento() {
    const totalCompraInput = document.getElementById("totalCompraInput").value;
    const resultado = document.getElementById("resultado");

    // Validación de entrada: Asegurarse de que sea un número positivo
    if (!/^\d+(\.\d+)?$/.test(totalCompraInput)) {
        resultado.textContent = "Por favor, ingresa un total de compra válido (número positivo).";
        resultado.style.color = "red";
        return;
    }

    const totalCompra = parseFloat(totalCompraInput);

    // Cálculo del descuento y total a pagar
    const descuento = totalCompra * 0.15; // 15% de descuento
    const totalAPagar = totalCompra - descuento;

    resultado.textContent = `Descuento aplicado: $${descuento.toFixed(2)}. Total a pagar: $${totalAPagar.toFixed(2)}.`;
    resultado.style.color = "green";
}
