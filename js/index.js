
let indexPregunta = 0;
cargarPregunta(indexPregunta);
let puntaje = 0;


function cargarPregunta (index){
    objetoPregunta = preguntas[index]
    opciones = [...objetoPregunta.respuestaIncorrecta]
    opciones.push(objetoPregunta.respuestaCorrecta)
    for (let i = 0; i<4; i++){
        opciones.sort(() => Math.random() -0.5);
    }
    
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("opcion1").innerHTML = opciones[0]
    document.getElementById("opcion2").innerHTML = opciones[1]
    document.getElementById("opcion3").innerHTML = opciones[2]
    document.getElementById("opcion4").innerHTML = opciones[3]
}

async function seleccionarOpcion (index){
    
    let validez = opciones[index] == objetoPregunta.respuestaCorrecta;
    
    if (validez) {
        await Swal.fire({
            title: "Felicidades",
            text: "La respuesta es correcta",
            icon: "success"
          });
          puntaje++;
    }else{
        await Swal.fire({
            title: "Respues incorrecta",
            text: `La respuesta correcta es: "${objetoPregunta.respuestaCorrecta}"`,
            icon: "error"
          });
    }
    aprobado = puntaje >= (preguntas.length / 2);
    desaprobado = puntaje < (preguntas.length / 2);
   indexPregunta++;
   if (indexPregunta >= preguntas.length && aprobado){
    indexPregunta= 0;
    await Swal.fire({
        title: "Felicitaciones",
        text: `Tu puntaje es: "${puntaje}"/${preguntas.length}`,
        icon: "success"
      });
      indexPregunta = 0;
      puntaje = 0;
   }
   if (indexPregunta >= preguntas.length && desaprobado){
    indexPregunta= 0;
    await Swal.fire({
        title: "Sigue intentandolo :)",
        text: `Tu puntaje es: "${puntaje}"/${preguntas.length}`,
        icon: "error"
      });
      indexPregunta = 0;
      puntaje = 0;
    }
   cargarPregunta(indexPregunta)

}
