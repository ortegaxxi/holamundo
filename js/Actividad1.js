function Nmenor(numero1,numero2,numero3){
	let n1,n2,n3;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	n3=parseFloat(numero3);
	if (n1<n2) {
		if (n1<n3) {
			document.getElementById("resultadoMenor").innerHTML="<h1>El numero menor es: " + n1 +"</h1>";
		}else{
				document.getElementById("resultadoMenor").innerHTML="<h1>El numero menor es: " + n3 +"</h1>";
		}
	}else{
		if (n2<n3) {
			document.getElementById("resultadoMenor").innerHTML="<h1>El numero menor es: " + n2 +"</h1>";
		}else{
			document.getElementById("resultadoMenor").innerHTML="<h1>El numero menor es: " + n3 +"</h1>";
		}
	}
}
function Dia(numero1){

	let n1;
	n1=parseFloat(numero1);

	switch(n1){
	case 1:
	document.getElementById("resultadoDia").innerHTML="<h1>El dia de la semana es LUNES</h1>";
	break;
	case 2:
	document.getElementById("resultadoDia").innerHTML="<h1>El dia de la semana es MARTES</h1>";
	break;
	case 3:
	document.getElementById("resultadoDia").innerHTML="<h1>El dia de la semana es MIERCOLES</h1>";
	break;
	case 4:
	document.getElementById("resultadoDia").innerHTML="<h1>El dia de la semana es JUEVES</h1>";
	break;
	case 5:
	document.getElementById("resultadoDia").innerHTML="<h1>El dia de la semana es VIERNES</h1>";
	break;
	case 6:
	document.getElementById("resultadoDia").innerHTML="<h1>El dia de la semana es SABADO</h1>";
	break;
	case 7:
	document.getElementById("resultadoDia").innerHTML="<h1>El dia de la semana es DOMINGO</h1>";
	break;
	default:
	document.getElementById("resultadoDia").innerHTML="<h1>Opcion no valida</h1>";
	break; 
	}
}
function Edad(numero1){
	let n1;
	n1=parseFloat(numero1);
	if (n1<=3) {
		document.getElementById("resultadoEdad").innerHTML="<h1>Eres un Bebe</h1>";
	}else if (n1>3 && n1<13) {
		document.getElementById("resultadoEdad").innerHTML="<h1>Eres un Niño</h1>";
	}else if (n1>=13 && n1<18) {
		document.getElementById("resultadoEdad").innerHTML="<h1>Eres un Adolescente</h1>";
	}else if (n1>=18) {
		document.getElementById("resultadoEdad").innerHTML="<h1>Eres un Adulto</h1>";
	}
}