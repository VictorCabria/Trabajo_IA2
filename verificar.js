function validar() {
	var id, nombre, edad, genero, alb, alp, alt, ast, bil, che, crea, ggt, prot, tabla, filaactual, nuevafila, celda1, celda2, celda3, celda4, celda5, celda6, celda7, celda8, celda9, celda10, celda11, celda12, celda13, celda14, celda15;

	id = document.getElementById("identificacion").value;
	nombre = document.getElementById("nombre").value;
	edad = document.getElementById("edad").value;
	genero = document.getElementById("genero").value;
	alb = document.getElementById("ALB").value;
	alp = document.getElementById("ALP").value;
	alt = document.getElementById("ALT").value;
	ast = document.getElementById("AST").value;
	bil = document.getElementById("BIL").value;
	che = document.getElementById("CHE").value;
	crea = document.getElementById("CREA").value;
	ggt = document.getElementById("GGT").value;
	prot = document.getElementById("PROT").value;
	

	if (alb == "" || alp == "") {
		alert("Uno o más campos no fueron diligenciados");
	} else {
		Calcular();
		tabla = document.getElementById("tb");
		filaactual = document.getElementById("tb").rows.length;
		nuevafila = tabla.insertRow(filaactual);
		celda1 = nuevafila.insertCell(0);
		celda2 = nuevafila.insertCell(1);
		celda3 = nuevafila.insertCell(2);
		celda4 = nuevafila.insertCell(3);
		celda5 = nuevafila.insertCell(4);
		celda6 = nuevafila.insertCell(5);
		celda7 = nuevafila.insertCell(6);
		celda8 = nuevafila.insertCell(7);
		celda9 = nuevafila.insertCell(8);
		celda10 = nuevafila.insertCell(9);
		celda11 = nuevafila.insertCell(10);
		celda12 = nuevafila.insertCell(11);
		celda13 = nuevafila.insertCell(12)
		celda14 = nuevafila.insertCell(13)
		celda15 = nuevafila.insertCell(14)

		celda1.innerHTML = id;
		celda2.innerHTML = nombre;
		celda3.innerHTML = edad;
		celda4.innerHTML = genero;
		celda5.innerHTML = alb;
		celda6.innerHTML = alp;
		celda7.innerHTML = alt;
		celda8.innerHTML = ast;
        celda9.innerHTML = bil
		celda10.innerHTML = che
		celda11.innerHTML = crea
		celda12.innerHTML = ggt
		celda13.innerHTML = prot
		celda14.innerHTML = imc
		celda15.innerHTML = resultado;

		if (imc < 9.99) {
			celda15.style.background = "red";
		}
		if (imc >= 10.00 && imc <= 69.99) {
			celda15.style.background = "yellow";
		}
		if (imc >= 70.00 && imc <= 100.00) {
			celda15.style.background = "green";
		}


		document.getElementById("identificacion").value = "";
		document.getElementById("nombre").value = "";
		document.getElementById("edad").value = "";
		document.getElementById("genero").value = "";
		document.getElementById("ALB").value = "";
		document.getElementById("ALP").value = "";
		document.getElementById("ALT").value = "";
		document.getElementById("AST").value = "";
		document.getElementById("BIL").value = "";
		document.getElementById("CHE").value = "";
		document.getElementById("CREA").value = "";
		document.getElementById("GGT").value = "";
		document.getElementById("PROT").value = "";
	}
}

function Calcular() {
	alb=parseInt(document.getElementById("ALB").value);
	alp=parseInt(document.getElementById("ALP").value);
	alt= parseInt(document.getElementById("ALT").value);
	ast= parseInt(document.getElementById("AST").value);
	bil= parseInt(document.getElementById("BIL").value);
	che= parseInt(document.getElementById("CHE").value);
	chea= parseInt(document.getElementById("CREA").value);
	ggt= parseInt(document.getElementById("GGT").value);
	prot= parseInt(document.getElementById("PROT").value);
	imc =  (alb+alp+alt+ast+bil+che+chea+ggt+prot)/9;
	
	imcc = imc.toFixed(1);
	

	if (imc < 9.99) {
		resultado = "Negativo para Hepatitis";
	}
	if (imc >= 10.00 && imc <= 69.99) {
		resultado = "Posibilidad de padecer Hepatitis";
	}
	if (imc >= 70.00 && imc <= 100.00) {
		resultado = "Positivo para Epatitis";
	}

	return resultado;
}