alert("Bievenid@ a nuestra calculadora");
let a = Number(prompt("ingrese un primer valor"));
let b = Number(prompt("ingrese un segundo valor"));
let repetirOperacion;

do {

  repetirOperacion = false;
  let option = prompt(
    'PRESIONE "+" SUMAR "-" RESTAR "*" MULTIPLICAR */* DIVIDIR'
  );

  const suma = (a, b) => a + b;
  const resta = (a, b) => a - b;
  const multiplicar = (a, b) => a * b;
  const dividir = (a, b) => a / b;

  switch (option) {
    case '+':
      console.log("el resultado es: " + suma(a, b));
      break;
    case "-":
      console.log("el resultado es: " + resta(a, b));
      break;
    case "*":
      console.log("el resultado es: " + multiplicar(a, b));
      break;
    case "/":
        if (b == 0) {
            console.log('error, no se puede dividir ningun numero entre 0, actualice y asegurese que el segundo numero no sea cero (0) para dividir');
            break;
        }
      console.log("el resultado de la division es: " + dividir(a, b));
      break;
    default:
      alert("no selecciono una opcion correcta - vuelva a intentar");
      repetirOperacion = true;
      break;
  }
} while (repetirOperacion);



