const prompt = require("prompt-sync")();
var peso  = parseFloat(prompt("Dgite seu peso: "));
var altura = parseFloat(prompt("Digite sua altura: "))
var imc = parseFloat(peso/ (altura*altura))
console.log(`O imc dessa pessoa é ${imc}!`)
