const alternativasCredito = [
    { capital: 150000, plazo: 1, tasa: 15 },
    { capital: 300000, plazo: 6, tasa: 10 },
    { capital: 485000, plazo: 2, tasa: 23 },
  ];
  
  function calcularInteres(alternativa) {
    const { capital, plazo, tasa } = alternativa;
    return (capital * plazo * tasa) / 100;
  }
  
  function calcularTotalIntereses(alternativas) {
    let totalIntereses = 0;
    const alternativasConInteres = alternativas.map(alternativa => {
      const interes = calcularInteres(alternativa);
      totalIntereses += interes;
      return { ...alternativa, interes };
    });
  
    return { alternativasConInteres, totalIntereses };
  }
  
  const { alternativasConInteres, totalIntereses } = calcularTotalIntereses(alternativasCredito);
  console.log("Alternativas con intereses calculados:", alternativasConInteres);
  console.log("Total de intereses:", totalIntereses);