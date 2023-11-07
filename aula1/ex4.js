const prompt = require('prompt-sync')();
var nt1 = parseFloat(prompt("digite a primeira nota do aluno: "));
var nt2 = parseFloat(prompt("digite a segunda nota do aluno: "));
var nt3 = parseFloat(prompt("digite a terceira nota do aluno: "));
var media = ((nt1+nt2+nt3)/3);
console.log(`A media do aluno é ${media}`)
