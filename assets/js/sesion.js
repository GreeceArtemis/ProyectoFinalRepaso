var btnUNO = document.getElementById("registrado");
var btnDOS = document.getElementById("registrate");

   btnUNO.style.visibility  = 'hidden'; // No se ve
   btnDOS.style.visibility  = 'hidden'; // No se ve
//         btnUNO.style.display = 'none'; // No ocupa espacio
//         btnDOS.style.visibility  = 'visible'; // Se ve
   btnDOS.style.display = ''; // Se muestra por defecto
   document.getElementsByTagName("button")[0].addEventListener("click",function(){
     window.location="iniciarsesion.html"

})
 document.getElementsByTagName("button")[1].addEventListener("click",function(){
   window.location="iniciarsesion.html"

 })
 document.getElementsByTagName("button")[2].addEventListener("click",function(){
   window.location="registro.html"

 })
