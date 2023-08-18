function FlujoCaja() {
    const flujoCajaInput = prompt("Ingresa el valor, o los valores del flujo de caja separados por espacios:");
    const flujoCajaArray = flujoCajaInput.split(" ").map(valor => parseInt(valor));
  
    const totalFlujo = flujoCajaArray.reduce((total, valor) => total + valor, 0);
  
    if (totalFlujo < 0) {
      return -1; // Pérdidas
    } else if (totalFlujo > 0) {
      return 1; // Ganancias
    } else {
      return 0; // Ingresos iguales a gastos
    }
  }
  
  const resultado = FlujoCaja();
  
  if (resultado === -1) {
    console.log("Hay pérdidas.");
  } else if (resultado === 1) {
    console.log("Hay ganancias.");
  } else {
    console.log("Los ingresos son iguales a las ganancias.");
  };