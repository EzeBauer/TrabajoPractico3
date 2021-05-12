const fs = require('fs');
const tareas = JSON.parse (fs.readFileSync('./db/tareas.json','utf-8'));


 let appTareas= {

    verCartel: function(mensaje){
        console.log('**************************');
        console.log(mensaje);
        console.log('**************************');
        },
    
    listarTareas: function(){ 
       
        tareas.forEach(function (tarea, indice) {
            console.log((indice + 1),tarea);
            })
        },

    escribirJSON : function(tareas){
        fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas, null,2),'utf-8')
        this.verCartel("JSON actualizado y guardado")
        },

    nuevaTarea: function(titulo,estado) {
        /* con los paramaetros creo una nueva tarea */
        let nuevaTarea = { 
            titulo, // xq coincide con los argumentos
            estado :"pendiente"
        }
        tareas.push(nuevaTarea) //agrego una nueva tarea!
        this.escribirJSON(tareas);
        this.listarTareas()
        this.verCartel("TAREA AGREGADA")
         },
    leerPorEstado: function(estado){
           return tareas.filter(tarea=>tarea.estado===estado)
                  
         }
         
    }
    
   module.exports=appTareas;