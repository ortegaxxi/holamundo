function Suma(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	//alert("La suma es: " + sum);
	document.getElementById("resSuma").innerHTML="<h2> La suma es: " + sum; + "</h2>";
}

function Resta(res1,res2){
	let n1,n2,res;
	n1=parseFloat(res1);
	n2=parseFloat(res2);
	res=n1-n2;
	alert("La resta es: " + res);
}

function Mult(multi1,multi2){
	let n1,n2,mul;
	n1=parseFloat(multi1);
	n2=parseFloat(multi2);
	mul=n1*n2;
	alert("La multiplicacion es: " + mul);
}

function Div(div1,div2){
	let n1,n2,divi;
	n1=parseFloat(div1);
	n2=parseFloat(div2);
	divi=n1/n2;
	alert("La division es: " + divi);
}

/*
Crear funciones en js
function calcularSuma(){
alert ("Hola, bienvenido!");
document.write ("Hola");
}
let nombre=prompt("Ingresa tu nombre: ");
let edad=prompt("Ingresa tu edad: ");
document.write("Hola " + nombre);
document.write(" <br> Tu edad es: " + edad)
let num1=parseInt(prompt("Ingresa el primer numero: "));
let num2=parseInt(prompt("Ingresa el segundo numero: "));

let suma=num1+num2;
document.write("La suma es: " + suma);
*/
