// Hemos omitido los acentos en los comentarios por compatibilidad

var top3 = [];
var canciones;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (datos.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5501/json/datos.json"
  }).done(function (resultado) {

    //Guarda el resultado en variables
    canciones = resultado.canciones;

    //Recorre por los datos del JSON y lo guarda en una array
    for(var i = 0; i < canciones.length; i++){
        top3.push(canciones[i]);
    }

    //Ordena las reproduciones de mayor a menor 
    top3 = top3.sort(function(x,y){
      if (x.reproducciones < y.reproducciones){
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle el top 3 de las canciones
    var html = ""

    //Recorre el array y concatena el HTML para cada canciones
    for(var j = 0; j < 3; j++){
      html += `
              <table class="table ">
              <tbody>
                <tr>
                    <td class="hidden m-auto p-3">${top3[j].nombre}</td>
                    <td class="p-3">
                        <audio controls>
                            <source src="${top3[j].ruta}" type="audio/mpeg">
                        </audio>
                    </td>
                </tr>
              </tbody>
            </table

              `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("top3").innerHTML = html

  })

});
