
  window.addEventListener('load',function(e) {

    var baseDatos=[];
    var nombre=document.getElementById("nombre");
    var apellido=document.getElementById("apellido");
    var correo=document.getElementById("correo");
    var contraseña=document.getElementById("contraseña");

    function alldatos(nombre,apellido,correo,contraseña){
          this.nombre=nombre;
          this.apellido=apellido;
          this.correo=correo;
          this.contraseña=contraseña;
    };

//VALIDACION DE LETRAS
    var validarLetras=function(e){
        var codigoTecla=e.keyCode;
        if((codigoTecla>=97 && codigoTecla<=122)||(codigoTecla>=65 && codigoTecla<=90)||codigoTecla==39 || codigoTecla==32){
              this.nextElementSibling.nextElementSibling.innerText = "";
              return true;
            }
        else
          {
              this.nextElementSibling.nextElementSibling.innerText = "SOLO LETRAS";
              return false;
          }
    }
  //
    nombre.onkeypress=validarLetras;
    apellido.onkeypress=validarLetras;
    console.log(nombre.value);
  //
    var datosRegistro=document.getElementsByClassName("datoRegistro");
    console.log(datosRegistro);
    var validacionDato=function(){
          if(this.value.trim().length==0){
                this.value="";
                this.nextElementSibling.nextElementSibling.innerText="*Este campo es obligatorio";
            }
        else {
                this.nextElementSibling.nextElementSibling.innerText="";
            }
       }
    for(var i=0;i<datosRegistro.length;i++){
        datosRegistro[i].onblur=validacionDato;
    }

    guardarRegistro.addEventListener('click',function(e) {
      e.preventDefault();
      //VALIDAR TODOS LOS CAMPOS
          if (nombre.value == "" || apellido.value == "" || correo.value == "" || contraseña.value == ""){
              document.getElementById("mensajeError").innerHTML="OBLIGATORIO LLENAR EL FORMULARIO"  ;
          }
          else{
              document.getElementById("mensajeError").innerHTML="";
      //ALMACENO TODOS MIS CODERS
              var coder=new alldatos (nombre.value,apellido.value,correo.value,contraseña.value);
              baseDatos.push(coder);

              localStorage.setItem("nuevoCoder",JSON.stringify(coder));
              localStorage.setItem("baseDatosGeneral",JSON.stringify(baseDatos));
      //MUESTRO TODOS MIS CODERS
              console.log(baseDatos);
              document.getElementById("registroCoder").reset();
          }
          window.location="mostrar.html";
      });
});

