function palabrasANumeros() {
    const entrada = document.getElementById("entrada").value.trim();
    const resultado = document.getElementById("resultado");

    
    if (entrada === "") {
        resultado.textContent = "Por favor, ingresa algunas palabras.";
        resultado.style.color = "red";
        return;
    }

   
    const palabrasANum = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    const palabras = entrada.split(',').map(p => p.trim());
    
    
    const numeros = palabras.map(palabra => {
        if (palabra === "") {
            return -1; 
        }
        return palabrasANum[palabra] !== undefined ? palabrasANum[palabra] : -1;
    });
    
    
    resultado.textContent = `Resultado: [${numeros.join(', ')}]`;
    resultado.style.color = "green";
}
