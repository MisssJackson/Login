const cerrarSesion = document.getElementById("cerrar-sesion");
//Redirige a la página principal
function cerrar(){
    window.location.href="index.html"
} 
//Se agrega el evento al botón 
cerrarSesion.addEventListener("click", (e)=>{
    e.preventDefault();
    cerrar();
    });