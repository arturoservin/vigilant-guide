
var  peso;
var  altura;
var  resultado_imc;

peso = prompt("cual es tu peso? (en kilogramos)");
altura = prompt("cual es tu altura? (en centimetros)");

resultado_imc = (peso / (altura**2))*10000;

document.write("tu IMC es " + resultado_imc);
//Validamos que se cumpla el rango
if (resultado_imc > 18.5||resultado_imc < 24.9 ) {
  document.write("su imc es normal para un adulto promedio")
}

else {

}
