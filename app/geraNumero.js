var n1;
var n2;
var res;

function geraNumeros() {
    n1 = Math.round(Math.random() * 10);
    n2 = Math.round(Math.random() * 10);
}

function soma () {
    res = n1 + n2
}

function exibeNumeros() {
    document.getElementById("n1").innerHTML = n1;
    document.getElementById("n2").innerHTML = n2;
}

geraNumeros();
exibeNumeros();
soma();

