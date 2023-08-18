function calcularResultado() {
    const flujoCaja = document.getElementById("flujoCaja").value;
    const flujoCajaArray = flujoCaja.split(",").map(value => parseFloat(value.trim()));

    const totalFlujoCaja = flujoCajaArray.reduce((total, value) => total + value, 0);

    const resultadoElement = document.getElementById("resultado");
    if (totalFlujoCaja >= 0) {
      resultadoElement.textContent = "El flujo de caja genera ganancias.";
    } else {
      resultadoElement.textContent = "El flujo de caja genera pérdidas.";
    }
  };