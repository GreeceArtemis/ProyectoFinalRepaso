
  window.addEventListener('load',function(e) {

    var nombre = document.getElementById("nombre");
  	var apellido = document.getElementById("apellido");
  	var correo = document.getElementById("correo");
  	var contraseña = document.getElementById("contraseña");

  	var objetoCoder = JSON.parse(localStorage.getItem("nuevoCoder"));
    var baseDatos=JSON.parse(localStorage.getItem("baseDatosGeneral"));
    nombre.value=objetoCoder.nombre;
  	apellido.value=objetoCoder.apellido;
  	correo.value=objetoCoder.correo;
  	contraseña.value=objetoCoder.contraseña;

  	function Coder(nombreCoder, apellidoCoder, correoCoder, contraseñaCoder) {
  		this.nombre = nombreCoder;
  		this.apellido = apellidoCoder;
  		this.correo = correoCoder;
  		this.contraseña = contraseñaCoder;

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
    var datosEdicion=document.getElementsByClassName("datoEditado");
    console.log(datosEdicion);
    var validacionDato=function(){
          if(this.value.trim().length==0){
                this.value="";
                this.nextElementSibling.nextElementSibling.innerText="*Este campo es obligatorio";
            }
        else {
                this.nextElementSibling.nextElementSibling.innerText="";
            }
       }
    for(var i=0;i<datosEdicion.length;i++){
        datosEdicion[i].onblur=validacionDato;
    }

    guardarCambio.addEventListener('click',function(e) {
      e.preventDefault();
      //VALIDAR TODOS LOS CAMPOS
          if (nombre.value == "" || apellido.value == "" || correo.value == "" || contraseña.value == ""){
              document.getElementById("mensajeError").innerHTML="OBLIGATORIO LLENAR EL FORMULARIO"  ;
          }
          else{
              document.getElementById("mensajeError").innerHTML="";
      //ALMACENO TODOS MIS CODERS
            var coder=new Coder (nombre.value,apellido.value,correo.value,contraseña.value);
            baseDatos.push(coder);

            localStorage.setItem("nuevoCoder",JSON.stringify(coder));
            localStorage.setItem("baseDatosGeneral",JSON.stringify(baseDatos));
      //MUESTRO TODOS MIS CODERS
            //  console.log(baseDatos);
            //document.getElementById("edicionCoder").reset();
              window.location="mostrar.html";
          }

      });
});
