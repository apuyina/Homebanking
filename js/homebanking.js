iniciarSesion()

//Declaración de variables
var nombreUsuario = "Margarita Benavides"
var saldoCuenta = 14000
var limiteExtraccion = 5000

var precioAgua = 350
var precioTelefono = 425
var precioLuz = 210
var precioInternet = 570

var cuentaAmiga1 = 1234567
var cuentaAmiga2 = 7654321

var contraseña = 1043

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion(limite) {
	var limite = parseInt(prompt("¿Cuál desea que sea el límite de extracción?"),10);
	limiteExtraccion = limite;
	actualizarLimiteEnPantalla()
	alert("Nuevo límite de extracción:" + " " + limiteExtraccion)
}

function extraerDinero(dinero) {
	saldoAnterior = saldoCuenta
	var dinero = parseInt(prompt("¿Cuánto dinero desea retirar?"),10);

	if ((dinero<limiteExtraccion) && (dinero<saldoAnterior) && (!(dinero%100))) {
	saldoCuenta = saldoCuenta-dinero;
	actualizarSaldoEnPantalla();
	alert("Saldo anterior:" + " " + (saldoAnterior) + "\nHa retirado:" + " " + dinero + "\nSaldo actual:" + " " + saldoCuenta);
	} else if (saldoAnterior<dinero) {
	alert("No hay saldo disponible en tu cuenta para retirar ese monto")
	} else if (limiteExtraccion<dinero) {
	alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción")
	} else if (dinero%100) {
	alert("Sólo se pueden retirar billetes de cien")
	}
}

function depositarDinero(dinero) {
	var saldoAnterior = saldoCuenta
	var dinero = parseInt(prompt("¿Cuánto dinero desea ingresar?"),10);

	saldoCuenta = saldoCuenta+dinero;
	actualizarSaldoEnPantalla()
	alert("Saldo anterior:" + " " + (saldoAnterior) + "\nHa depositado:" + " " + dinero + "\nSaldo actual:" + " " + saldoCuenta);
}

function pagarServicio(servicio) {
	var servicio = parseInt(prompt("Elija la opción del servicio que desea pagar:" + "\n1. Agua" + "\n2.Teléfono" + "\n3. Luz" + "\n4. Internet"));
	var saldoAnterior = saldoCuenta

	switch(servicio) {
		case 1:
			if (saldoCuenta>=precioAgua) {
				saldoCuenta = saldoCuenta-precioAgua;
				alert("Ha pagado el servicio Agua \nSaldo anterior:" + " " + (saldoAnterior) + "\nDinero descontado:" + " " + precioAgua + "\nSaldo actual:" + " " + saldoCuenta);
			} else if (saldoCuenta<precioAgua) {
				alert("No hay suficiente saldo en tu cuenta para pagar este servicio")
			};
			break;
		case 2:
			if (saldoCuenta>=precioTelefono) {
				saldoCuenta = saldoCuenta-precioTelefono;
				alert("Ha pagado el servicio Telefono \nSaldo anterior:" + " " + (saldoAnterior) + "\nDinero descontado:" + " " + precioTelefono + "\nSaldo actual:" + " " + saldoCuenta);
			} else if (saldoCuenta<precioTelefono){
				alert("No hay suficiente saldo en tu cuenta para pagar este servicio")
			};
			break;
		case 3:
			if (saldoCuenta>=precioLuz) {
				saldoCuenta = saldoCuenta-precioLuz;
				alert("Ha pagado el servicio Luz \nSaldo anterior:" + " " + (saldoAnterior) + "\nDinero descontado:" + " " + precioLuz + "\nSaldo actual:" + " " + saldoCuenta);
			} else if (saldoCuenta<precioLuz){
				alert("No hay suficiente saldo en tu cuenta para pagar este servicio")
			};
			break;
		case 4:
			if (saldoCuenta>=precioInternet) {
				saldoCuenta = saldoCuenta-precioInternet;
				alert("Ha pagado el servicio Internet \nSaldo anterior:" + " " + (saldoAnterior) + "\nDinero descontado:" + " " + precioInternet + "\nSaldo actual:" + " " + saldoCuenta);
			} else if (saldoCuenta<precioInternet){
				alert("No hay suficiente saldo en tu cuenta para pagar este servicio")
			};
			break;
		default:
			alert("Disculpe, su selección no corresponde a un servicio. Intente nuevamente");
			break;
	}

	actualizarSaldoEnPantalla()
}

function transferirDinero(montoATransferir) {
	saldoAnterior = saldoCuenta
	var montoATransferir = parseInt(prompt("¿Cuánto dinero desea transferir?"),10);

	if (montoATransferir<saldoAnterior) {
		numeroCuenta = parseInt(prompt("Ingrese el Nº de cuenta a la que desea transferir"),10);
		if (numeroCuenta==cuentaAmiga1 || numeroCuenta==cuentaAmiga2) {
			saldoCuenta = saldoAnterior-montoATransferir;
			actualizarSaldoEnPantalla();
			alert("Se han transferido:" + " " + montoATransferir + "\nCuenta destino:" + " " + numeroCuenta);
		} else {
			alert("Sólo puede transferir dinero a una cuenta amiga")
		}
	}
}


function iniciarSesion(codigo) {
	var codigo = parseInt(prompt("Ingrese su contraseña:"))
	if (codigo =! contraseña) {
		alert("Bienvenido/a" + " " + nombreUsuario + " " + "ya puedes realizar operaciones");
	} else if (codigo=contraseña){
		saldoCuenta = 0;
		alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad")
	}

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}