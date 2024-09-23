function calcularCalificacionFinal() {
    const calificacion1 = document.getElementById("calificacion1").value;
    const calificacion2 = document.getElementById("calificacion2").value;
    const calificacion3 = document.getElementById("calificacion3").value;
    const examenFinal = document.getElementById("examenFinal").value;
    const trabajoFinal = document.getElementById("trabajoFinal").value;
    const resultado = document.getElementById("resultado");

    // Validación de las calificaciones
    const calificaciones = [calificacion1, calificacion2, calificacion3, examenFinal, trabajoFinal];
    for (let i = 0; i < calificaciones.length; i++) {
        if (!/^\d+(\.\d+)?$/.test(calificaciones[i]) || parseFloat(calificaciones[i]) < 0 || parseFloat(calificaciones[i]) > 100) {
            resultado.textContent = `Por favor, ingresa una calificación válida (número entre 0 y 100) en el campo ${i + 1}.`;
            resultado.style.color = "red";
            return;
        }
    }

    const parcial1 = parseFloat(calificacion1);
    const parcial2 = parseFloat(calificacion2);
    const parcial3 = parseFloat(calificacion3);
    const final = parseFloat(examenFinal);
    const trabajo = parseFloat(trabajoFinal);

    // Cálculo del promedio de las calificaciones parciales
    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

    // Cálculo de la calificación final
    const calificacionFinal = (promedioParciales * 0.55) + (final * 0.30) + (trabajo * 0.15);

    resultado.textContent = `Tu calificación final en la materia de Algoritmos es: ${calificacionFinal.toFixed(2)}.`;
    resultado.style.color = "green";
}
