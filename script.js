var textareaOutput = document.getElementById("textareaOutput");

document.getElementById ("textareaInput").value = "";

var mensaje = "";

var btnEncriptar = document.getElementById("btnEncriptar");   
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");

function encriptar (){
    var textareaInput = document.getElementById ("textareaInput").value;
    mensaje = encriptarTexto(textareaInput);
    document.querySelector(".textareaOutput").value = mensaje;
    document.getElementById("outputContainer").style.visibility = "visible";
    document.getElementById("textos").style.display = "none";    
    document.querySelector(".buttonRight").style.display = "flex";
    document.getElementById("sectionRight").style.backgroundImage = "none"; 
}

function desencriptar (){
    var textareaInput = document.getElementById ("textareaInput").value;
    mensaje = desencriptarTexto(textareaInput);
    document.querySelector(".textareaOutput").value = mensaje;
}

function encriptarTexto(mensaje){
    var textoEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    return textoEncriptado;
}

function desencriptarTexto(mensaje){
    var textoEncriptado = mensaje
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    return textoEncriptado;
}

function copiar () {
    navigator.clipboard.writeText(document.querySelector(".textareaOutput").value);
    document.querySelector(".textareaInput").value = document.querySelector(".textareaOutput").value;
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar; 