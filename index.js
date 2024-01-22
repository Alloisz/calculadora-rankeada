//Desafio DIO

function calculadoraRankeada(vitorias,derrotas){
    const saldoVitorias = vitorias - derrotas;
    let elo = "" 
    if(saldoVitorias< 10){
       elo = "Ferro";
    }
    if(saldoVitorias>11 && saldoVitorias<=20){
       elo = "Bronze";
    }
      if(saldoVitorias>21 && saldoVitorias<=50){
       elo = "Prata";
    }
      if(saldoVitorias>50 && saldoVitorias<=80){
      elo = "Ouro";
    }
      if(saldoVitorias>80 && saldoVitorias<=90){
      elo = "Diamante";
    }
      if(saldoVitorias>90 && saldoVitorias<=100){
      elo = "Lendario";
    }
      if(saldoVitorias>=101){
      elo = "Imortal";
    }
    return `O herói tem de saldo de ${saldoVitorias} está no nível de ${elo}`;
  }
console.log(calculadoraRankeada(60,20))