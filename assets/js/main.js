var cantidad=0;

window.addEventListener("load",function () {
      var baseDatos=[{"nombre":"grecia","apellido":"rayme","correo":"grecia.rapu@lab.la","contraseña":"1234567"}];

      localStorage.setItem("baseDatosGeneral",JSON.stringify(baseDatos));
      document.getElementById("registro").addEventListener("click",function(){
      window.location="registro.html";
  })
      document.getElementById("iniciarSesion").addEventListener("click",function(){
      window.location="iniciarsesion.html";
  })
});
