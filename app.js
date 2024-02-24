
function encriptar() {
    let texto = document.getElementById("texto").value;
   

    let textocifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    if (texto.length != 0) {

        document.getElementById("mensaje").value = textocifrado;
        document.getElementById("mensaje").hidden=false;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafoEncriptado.textContent ="";
        document.getElementById("texto").value= "";
        document.getElementById('imagenencriptado').style.display='none';
        document.getElementById('copiar').hidden=false;

    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafoEncriptado.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

        Swal.fire("Error!", "Debes ingresar un texto", "warning");
    }

}


function desencriptar() {
    let texto = document.getElementById("texto").value;
   

    let textocifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");


    if (texto.length != 0) {

        document.getElementById("mensaje").value = textocifrado;
        document.getElementById("mensaje").hidden=false;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafoEncriptado.textContent ="";
        document.getElementById("texto").value= "";
        document.getElementById('imagenencriptado').style.display='none';
        document.getElementById('copiar').hidden=true;

    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafoEncriptado.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

        Swal.fire("Error!", "Debes ingresar un texto", "warning");
    }

}

function copiar() {
    let inputext = document.getElementById("mensaje");
    inputext.select();
    inputext.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputext.value);

  }