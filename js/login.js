function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
  }
  
  function validar(formulario) {
  
    limpiarErrores();
  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)){
      document.getElementById("errorEmail").innerText = "Email inválido";
      formulario.email.focus();
      return false;  
    }
    if (formulario.contrasena.value.trim().length == 0) {
      document.getElementById("errorContraseña").innerText = "Por favor ingresar la contraseña, mínimo 8 caracteres";
      formulario.contrasena.focus();
      return false;
    }
    if (formulario.contrasena.value.trim().length >= 8) {
      alert("Bienvenido");

      return true;
    }
    else {
      document.getElementById("errorContraseña").innerText = "Debe ingresar como mínimo 8 caracteres para la contraseña";
      formulario.contrasena.focus();
      return false;
    }

  }
    