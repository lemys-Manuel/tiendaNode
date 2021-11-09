//importo el modelo de datos
const HabitacionModelo = require('../models/HabitacionModelo.js')

//servicio para agregar un documento ala BD
async function insertarhabitacion(datosHabitacion){
    
    let HabitacionAInsertar= new HabitacionModelo(datosHabitacion)

    return await HabitacionAInsertar.save()

}

//servicio para buscar1 document d la bd.
async function leerHabitacion(id){
let habitacion= await HabitacionModelo.findById(id)
return habitacion
}
//servicio para buscar todos los document d la bd.
async function leerHabitaciones(){
    let habitaciones= await HabitacionModelo.findById()
    return habitaciones
}
//servicio para editar1 document d la bd.
async function editarHabitacion(id,datos){
   return  await HabitacionModelo.findByIdAndUpdate(id,datos)
}

//servicio para eliminar 1  document d la bd.
async function eliminarHabitacion(id){
    return  await HabitacionModelo.findByIdAndDelete(id)
  }

 


module.exports={
    insertarhabitacion,
    leerHabitacion,
    leerHabitaciones,
    editarHabitacion,
    eliminarHabitacion
    

}