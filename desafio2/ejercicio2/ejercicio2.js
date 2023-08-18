function calcularInteres(inversion) {
    const { capital, plazo, tasa } = inversion;
    return (capital * plazo * tasa) / 100;
  }
  
  function agregarInteresAInversiones(inversiones) {
    return inversiones.map(inversion => ({ ...inversion,
      interes: calcularInteres(inversion)
    }));
  }
  
  const inversiones = [
    { capital: 150000, plazo: 1, tasa: 15 },
    { capital: 300000, plazo: 6, tasa: 10 },
    { capital: 485000, plazo: 2, tasa: 23 }
  ];
  
  const inversionesConInteres = agregarInteresAInversiones(inversiones);
  console.log(inversionesConInteres);
  