// Data de hoje
var dataHoje = new Date();

// Data limite para pagamento
var dataLimite = new Date("2023-11-02"); // Substitua pela data limite desejada

// Valor da multa inicial
var valorMulta = 0; // Valor inicial da multa

console.log(dataHoje, typeof(data_hdataHojeoje));
console.log(dataLimite, typeof(dataLimite));

// Verifica se a data de hoje é maior do que a data limite
if (dataHoje > dataLimite) {
  // Calcula a diferença de dias entre a data de hoje e a data limite
  var diffEmDias = Math.floor((dataHoje - dataLimite) / (1000 * 60 * 60 * 24));
  console.log(diffEmDias, typeof(diffEmDias));

  // Incrementa a multa em R$1 por dia de atraso
  valorMulta = diffEmDias;
}

console.log("Multa atual: R$" + valorMulta);
