
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
        console.log(textocifrado);

        document.getElementById("texto").value= "";
  
    }

}
