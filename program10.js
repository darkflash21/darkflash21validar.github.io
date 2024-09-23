function eliminarEtiquetas() {
    const inputHTML = document.getElementById("inputHTML").value;
    const resultado = document.getElementById("resultado");

    // Expresión regular para eliminar etiquetas <script> y su contenido
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

    // Eliminar etiquetas y su contenido
    const htmlLimpio = inputHTML.replace(regex, "");

    resultado.textContent = htmlLimpio;
}
