var inputMensaje = document.querySelector("#mensaje");
var inputEncriptado = document.querySelector("#encriptado");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnEscuchar = document.querySelector("#escuchar");

function encriptar(){
    var mensaje = inputMensaje.value;
    mensaje = mensaje.toLowerCase();  //paso el mensaje a minusculas
    var mensajeEncriptado = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    inputEncriptado.value = mensajeEncriptado;
}
function desencriptar(){
    var mensajeEncriptado = inputMensaje.value;
    mensajeEncriptado = mensajeEncriptado.toLowerCase(); //paso el mensaje a minusculas
    var mensaje = mensajeEncriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    inputEncriptado.value = mensaje;
}
function copiar () {
    var mensajeEncriptado = inputEncriptado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}
function escuchar() {
    var mensajeEncriptado = inputEncriptado.value;
    let mensaje = new SpeechSynthesisUtterance();
    mensaje.text = mensajeEncriptado;
    mensaje.lang = "es-Es";
    window.speechSynthesis.speak(mensaje);
}
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
btnEscuchar.onclick = escuchar;