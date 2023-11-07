const prompt = require('prompt-sync')();
var hrs = prompt("Digite a quantidade de horas trabalhadas: ");
var hrsEx = prompt("Digite a quantidade de horas extras trabalhadas: ");
var salBT = ((hrs*10)+(hrsEx*15));
var salLQ = (salBT - (salBT*0.10));
console.log(`O valor do Salario Bruto é: ${salBT}`);
console.log(`O valor do Salario Liquido é: ${salLQ}`);