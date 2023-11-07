const prompt = require("prompt-sync")();
var catOP = parseFloat(prompt("Digite o valor do cateto oposto: "));
var catAD = parseFloat(prompt("Digite o valor do cateto adjacente: "));
var hip = parseFloat(catOP**2 + catAD**2) ** (1/2);