function updateLink() {
    const selectedProgram = document.getElementById('programSelect').value;
    const programLink = document.getElementById('programLink');

    // Verificar que se ha seleccionado un programa válido
    if (selectedProgram !== "0") {
        programLink.href = `program${selectedProgram}.html`;
        programLink.style.display = 'inline-block'; // Mostrar el enlace si se selecciona un programa
        programLink.textContent = `Ir a Programa ${selectedProgram}`; // Cambiar el texto del enlace
    } else {
        programLink.style.display = 'none'; // Ocultar el enlace si no se selecciona un programa
    }
}
 