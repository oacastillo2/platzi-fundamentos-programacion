var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);
var ancho = d.width;
var alto = d.height;
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var limpio = document.getElementById("limpiecito");
limpio.addEventListener("click", limpioPorClick);


dibujarLinea("black", 1, 1, 1, (ancho - 1));
dibujarLinea("black", 1, (ancho - 1), (ancho - 1), (ancho - 1));
dibujarLinea("black", (ancho - 1), 1, (ancho - 1), (ancho - 1));
dibujarLinea("black", (ancho - 1), 1, 0, 0);

function limpioPorClick(){
  lienzo.clearRect(0, 0, ancho, alto);
  dibujarLinea("black", 1, 1, 1, (ancho - 1));
  dibujarLinea("black", 1, (ancho - 1), (ancho - 1), (ancho - 1));
  dibujarLinea("black", (ancho - 1), 1, (ancho - 1), (ancho - 1));
  dibujarLinea("black", (ancho - 1), 1, 0, 0);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  var numLineas = parseInt(texto.value);
  var l = 0;
  var xf, yi, xf, yf;
  var colorcitoIzq = "purple";
  var colorcitoDer = "yellow";

  while(l < numLineas) {
    espaciado = ancho / numLineas;
    xi = 0;
    yi = espaciado * l;
    xf = espaciado * (l + 1);
    yf = ancho;
    dibujarLinea(colorcitoIzq, xi, yi, xf, yf);
    l++;
  }

  for(l=0; l < numLineas; l++){
    espaciado = ancho / numLineas;
    xi = ancho - (espaciado * (l + 1));
    yi = 0;
    xf = ancho;
    yf = ancho - (espaciado * l);
    dibujarLinea(colorcitoDer, xi, yi, xf, yf);
  }
}
