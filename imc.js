
var  peso;
var  altura;
var  resultado_imc;

peso = prompt("cual es tu peso? (en kilogramos)");
altura = prompt("cual es tu altura? (en centimetros)");

resultado_imc = (peso / (altura**2))*10000;

document.write("tu IMC es " + resultado_imc);
