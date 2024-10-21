let verOperacion = "";

function factorialNumero(e) {
  const numero = parseInt(document.getElementById("numero-entrada").value);
  const resultado = document.getElementById("resultado");

  e.preventDefault();

  let factorial = 1;
  secuenciaOperacion = "";

  if (numero > 0) {
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
      secuenciaOperacion += i === numero ? `${i}` : `${i} x `;
      mostrarOperacion()
    }
    resultado.innerText = `${numero}! es ${factorial}`;
  } else if (numero === 0) {
    resultado.innerText = "0! es 1";
    mostrarOperacion()  
  } else {
    resultado.innerText = "¡Ingrese un numero igual o mayor a 0!";
    mostrarOperacion()
  }

  document.getElementById("numero-entrada").value = "";
}

function mostrarOperacion() {
  const operacion = document.getElementById("operacion");
  if (secuenciaOperacion) {
    operacion.innerText = `n! = ${secuenciaOperacion}`;
  } else {
    operacion.innerText = "No se ha realizado ninguna operación válida.";
  }
}
