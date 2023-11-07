const prompt = require('prompt-sync')();
var raio = prompt("Digite o raio: "); 
var area =(3.14*(raio*raio));

console.log(`A área desse circulo com o ${raio} de raio é ${area}`);