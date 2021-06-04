//condicionales if-else
var a=18;
var b=12;
//Identificar el numero mayor.

if (a>b) {
	document.write("El numero mayor es: " + a);
}else{
	document.write("El numero mayor es: " + b);
}

//Ciclo for
//Numeros del 0 al 10:
for (var i = 0; i < 11; i++) {
	document.write(i);
}

//Ciclo while
var i=0;
while(i<11){
	document.write("<br>" + " " +i);
	i++;
}

//Ciclo do while
var x=0;
do{
	document.write("<br>" + " " +x);
	x++;
}while(x<11);

//Selección múltiple
//Casos o switch case
//Validar si un numero entre 1 y 4  1= hijo  2 = hija  3= padre  4 = madre
var familia=1;

switch(familia){
case 1:
	document.write("Eres Hijo");
	break;
	case 2:
	document.write("Eres Hija");
	break;
	case 3:
	document.write("Eres padre");
	break;
	case 4:
	document.write("Eres Madre");
	break;
	default:
	document.write("La opción no se encontró en el rango de valores.");


}