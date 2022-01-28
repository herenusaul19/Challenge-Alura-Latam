//=========funcion soloLetas me permite validar el formulario ==============
   
function sololetras(e){
    key= e.keyCode || e.which;

    teclado=String.fromCharCode(key).toLowerCase();

    letras= " abcdefghijklmnopqrstuvwxyz";

    prohibidos= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    especiales= "8-37-38-46";

    teclado_espacial=false;

    solo_min = false;

    for (var i in especiales){
        if(key== especiales[i]){
            teclado_espacial=true;break;
        }
        for(var i in prohibidos){
            if(key== prohibidos[i]){
                solo_min=true;break;
            }
        }
    }

    if (letras.indexOf(teclado)==-1 && !teclado_espacial){
        return false;

    }
}

function encriptar(){
   

   var texto = document.querySelector("#texto").value;
   var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#texto").value;
}

function desencriptar (){
    var texto = document.querySelector("#texto").value; 
var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
document.querySelector(".text-input-salida").value = textoCifrado;
 document.querySelector("#texto").value;

}
var boton2 = document.querySelector("#boton-desencriptar"); boton2.onclick = desencriptar;


//=================funcion preventDafault -- para evitar recargar la pagina========================

var form = document.getElementById("formulario"); 

form.addEventListener('submit', function(event){
 
    event.preventDefault();
    

   
}
)
  


//========funcion menu desplegable=====================

const dropdown = document.querySelector(".dropdown")
const header = document.querySelector("header")

 dropdown.addEventListener("click", ()=>{
    header.classList.toggle("open")
 })



 //====================funcion  typeWriter==================================

 const typeWriter = document.getElementById('typewriter-text');
 const text = 'Usted puede Encriptar su texto secreto.!!';
 
 typeWriter.innerHTML = text;
 typeWriter.style.setProperty('--characters', text.length);


//============= funcion copiar portapapeles =============================

function copiarAlPortapapales(){
    var texto = document.getElementById('texto');
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
  }


 


 
























