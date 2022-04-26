// Hemos omitido los acentos en los comentarios por compatibilidad

//Variables para la busqueda
var canciones;
const buscador = document.querySelector('#buscador');
const boton = document.querySelector('#boton');


$(document).ready(function () {

  //Carga los datos que estan en el JSON (datos.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5501/json/datos.json"
  }).done(function (resultado) {

    //Guarda el resultado en variables
    canciones = resultado.canciones;

    // filtrar las canciones por el buscador

      const filtrar = () => {
        result.innerHTML = '';

        const texto = buscador.value.toLowerCase();
    
        //Recorre el array y concatena el HTML para cada cancion
        for (let cancion of canciones) {
          let nombre = cancion.nombre.toLowerCase();
          if (nombre.indexOf(texto) !== -1) {
            result.innerHTML += `
                                  <div class="col-lg-4 col-md-6 border p-3">
                                    <div class="col border p-2" id="canciones">
                                      <img class="imag-fluid" src="${cancion.icono}" id="logo">
                                    </div>
                                      <h2><br>${cancion.nombre}</h2>              
                                        <audio controls>
                                          <source src="${cancion.ruta}" type="audio/mpeg">
                                        </audio>
                                    </div>
                                      `
                                    }
                                  }
          if(result.innerHTML ===''){
            result.innerHTML +=`
                                <div class="col-lg-4 col-md-6 border p-3">
                                
                                  <h2><br>No se encontro la cancion...</h2>         
                                </div>
                                              
                                `
                              }
        }
    //Modifica el DOM agregando el html generado
    
    buscador.addEventListener('keyup',filtrar)
    filtrar(); 
    
  

 })

});
