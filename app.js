
const moduloTareas= require ('./tareas/tareas');
const process= require('process');    
const comando = process.argv[2];


  switch (comando) {
    case undefined:
      console.log("Atención- Tienes que pasar una acción");
      break;

    case "listar":
      moduloTareas.listarTareas();
      break;
    
    case "crear":
      let titulo = process.argv[3];
      if (!titulo) {
        console.log("Debes escribir un titulo");
        break;
      }
      let estado = process.argv[4];
      moduloTareas.nuevaTarea(titulo, estado);
      break;

    case "filtrar":
      let estad = process.argv[3];
      console.log(`Estado de tareas: ${estad}`);
       let tareasPendientes= moduloTareas.leerPorEstado(estad)
      tareasPendientes.forEach(function (tarea) {
        console.log(tarea.titulo);
      });
      break;

    default:
      console.log("No entiendo qué quieres hacer");
      break;
  }
        
    
    