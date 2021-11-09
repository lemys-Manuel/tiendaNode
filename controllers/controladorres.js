//el controlador se encarga de administrar las peticiones y las respuestas
const {request,response}=require('express');
const { PromiseProvider } = require('mongoose');
//llamo el servicio para poderlo usar
const{insertarReserva}=require('../services/serviciores.js')
const { leerReserva}=require('../services/serviciores.js')
const { leerReservas}=require('../services/serviciores.js')
const { editarReserva}=require('../services/serviciores.js')
const { eliminarReserva}=require('../services/serviciores.js')
//en el controlador siempre debemos pensar cuales son las operaciones que debe realizar mi servidor.
async function registrarreserva(peticion=request,respuesta=response){ 

    let datosCliente=peticion.body;
    //intento grabar los datos
    try{
        await insertarReserva(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito registrando su reserva"
        })

    }catch(eror){
        respuesta.status(400).json({
            estado:false,
            mensaje:"fallò al registrar su reserva..."+error
    
        })

    }



    // la respuesta la comento por que no la necesito AudioNode, debo capturar los datos PromiseProvider.
    // respuesta.json(
    //     {
    //         estado:true,
    //         mensaje:"estoy registrando una reserva",
    //         datos:datosCliente
    //     }
    // )
}
async function buscarreserva(peticion=request,respuesta=response){
   //aqui capturo el id de la reserva a buscar
   let id=peticion.params.id

   try{
  let reserva=  await leerReserva(id)
    respuesta.status(200).json({
        estado:true,
        datos:reserva
    })

}catch(eror){
    respuesta.status(400).json({
        estado:false,
        mensaje:"fallò al buscar su reserva..."+error

    })

}
}
 async function buscarreservas(peticion=request,respuesta=response){
    try{
        let reservas=  await leerReservas()
          respuesta.status(200).json({
              estado:true,
              datos:reservas
          })
      
      }catch(eror){
          respuesta.status(400).json({
              estado:false,
              mensaje:"fallò al buscar sus reservas..."+error
      
          })
      
      }
}
 async function editarreserva(peticion=request,respuesta=response){
     let datos=peticion.body
     let id=peticion.params.id
     try{
        await editarReserva(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito editando su reserva"
        })

    }catch(eror){
        respuesta.status(400).json({
            estado:false,
            mensaje:"fallò al editar su reserva..."+error
    
        })

    }

    
}
async function eliminarreserva(peticion=request,respuesta=response){
   let id=peticion.params.id

   try{
    await eliminarReserva(id)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito desapareciendo su Reserva"

    })

 }catch(error){
    respuesta.status(400).json({
        estado:false,
        mensaje:"fallò al intentar desaparecer su Reservacion..."+error

    })

 }
}
module.exports={
    registrarreserva,
    buscarreserva,
    buscarreservas,
    editarreserva,
    eliminarreserva
}