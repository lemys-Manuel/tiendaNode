//importo el modelo de datos
const ReservaModelo = require('../models/ReservaModelo.js')

//servicio para agregar un documento ala BD
async function insertarReserva(datosReserva){
    
    let reservaAInsertar= new ReservaModelo(datosReserva)

    return await reservaAInsertar.save()

}

//servicio para buscar1 document d la bd.
async function leerReserva(id){
    let reserva= await ReservaModelo.findById(id)
    return reserva
}

//servicio para buscar todos los document d la bd.
async function leerReservas(){
    let reservas= await ReservaModelo.findById()
    return reservas
}
//servicio para editar1 document d la bd.
async function editarReserva(id,datos){
   return await ReservaModelo.findByIdAndUpdate(id,datos)
}

//servicio para eliminar 1 document d la bd.
async function eliminarReserva(id){
    return await ReservaModelo.findByIdAndDelete(id)
 }

module.exports={
    insertarReserva,
    leerReserva,
    leerReservas,
    editarReserva,
    eliminarReserva
    

}