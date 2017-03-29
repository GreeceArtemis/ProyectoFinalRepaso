window.onload=function(){
	var nombre = document.getElementById("nombreCoder");
	var apellido = document.getElementById("apellidoCoder");
	var correo = document.getElementById("correoCoder");
	var contraseña = document.getElementById("contraseñaCoder");

	var objetoCoder = JSON.parse(localStorage.getItem("nuevoCoder"));

	nombre.innerText=objetoCoder.nombre;
	apellido.innerText=objetoCoder.apellido;
	correo.innerText=objetoCoder.correo;
	contraseña.innerText=objetoCoder.contraseña;

	function Coder(nombreCoder, apellidoCoder, correoCoder, contraseñaCoder) {
		this.nombre = nombreCoder;
		this.apellido = apellidoCoder;
		this.correo = correoCoder;
		this.contraseña = contraseñaCoder;

	};

	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="editar.html"

	})
};
