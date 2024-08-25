
function obtenertexto() {
    const textarea = document.getElementById('textarea').value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "");
    const palabra = textarea
        .replace (/e/g , 'enter')
        .replace (/i/g , 'imes')
        .replace(/a/g , 'ai')
        .replace(/o/g , 'ober')
        .replace(/u/g , 'ufat');

    actualizarPantalla(palabra, textarea.length !== 0);
    console.log(palabra);
}

function devolvertexto() {
    const textarea = document.getElementById('textarea').value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "");
    const palabra = textarea
        .replace (/enter/g , 'e')
        .replace (/imes/g , 'i')
        .replace(/ai/g , 'a')
        .replace(/ober/g , 'o')
        .replace(/ufat/g , 'u');
      
    actualizarPantalla(palabra, textarea.length !== 0);
    console.log(palabra);
}

function copiar() {
    let textocopiado = document.getElementById("textofinal").textContent;
    let mtanuncio = 'Texto copiado con exito!';

    navigator.clipboard.writeText(textocopiado)
        .then(() => {
            mostrarAnuncio(mtanuncio);
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        }); 
}

function actualizarPantalla(palabra, mostrarTexto) {
    if (mostrarTexto) {
        document.getElementById("textofinal").style.display = "inline";
        document.getElementById("textofinal").innerText = palabra;
        document.getElementById("imagenflork").style.display = "none";
        document.getElementById("textoanuncio").style.display = "none";
        document.getElementById("botonesl").style.display = "inline";
        document.getElementById("botonesc").style.display = "inline";
    } else {
        document.getElementById("textofinal").style.display = "none";
        document.getElementById("imagenflork").style.display = "inline";
        document.getElementById("textoanuncio").style.display = "inline";
        document.getElementById("textoanuncio").innerText = "Ningún mensaje fue encontrado!";
    }
}

function mostrarAnuncio(mensaje) {
    document.getElementById("textofinal").style.display = "none";
    document.getElementById("imagenflork").style.display = "inline";
    document.getElementById("textoanuncio").style.display = "inline";
    document.getElementById("textoanuncio").innerText = mensaje;
}

function limpiar() {
    document.getElementById("textarea").value ="";
    document.getElementById("textofinal").textContent = "";
    document.getElementById("imagenflork").style.display = "inline";
    document.getElementById("textoanuncio").style.display = "inline";
    document.getElementById("botonesl").style.display = "none";
    document.getElementById("botonesc").style.display = "none";
    document.getElementById("textoanuncio").innerText = "Ningún mensaje fue encontrado!";
}