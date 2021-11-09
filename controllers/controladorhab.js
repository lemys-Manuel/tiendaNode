
//el controlador se encarga de administrar las peticiones y las respuestas
const {request,response}=require('express')

//importo el servicio para poderlo usar.
const{insertarHabitacion}=require('../services/serviciohab.js')
const{leerHabitacion}=require('../services/serviciohab.js')
const{leerHabitaciones}=require('../services/serviciohab.js')
const{editarHabitacion}=require('../services/serviciohab.js')
const{eliminarHabitacion}=require('../services/serviciohab.js')

//en el controlador siempre debemos pensar cuales son las operaciones que debe realizar mi servidor.
async function registrarhab(peticion=request,respuesta=response){
    //capturo los datos que llegan del cuerpo de la peticion
    let datosCliente=peticion.body;


  //intento grabar los datos en bd usando el servidor
 try{
    await insertarHabitacion(datosCliente)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito al registrar su habitacion"

    })

 }catch(error){
    respuesta.status(400).json({
        estado:false,
        mensaje:"fallò al registrar su habitacion..."+error

    })

 }
 

   
}

async function buscarhab(peticion=request,respuesta=response){
    //aqui capturo el id de la habitacion a buscar
    let id=peticion.params.id

    try{
       let habitacion= await buscarHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            datos:habitacion
    
        })
    
     }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"fallò al buscar su habitacion..."+error
    
        })
    
    }
        
    
}
 async function buscarhabi(peticion=request,respuesta=response){
    try{
        let habitaciones= await buscarHabitaciones()
         respuesta.status(200).json({
             estado:true,
             datos:habitaciones
     
         })
     
      }catch(error){
         respuesta.status(400).json({
             estado:false,
             mensaje:"fallò al buscar sus habitaciones..."+error
     
         })
     
     }
}
async function editarhab(peticion=request,respuesta=response){
    let datos=peticion.body
    let id=peticion.params.id

    try{
        await editarHabitacion(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito editando su habitacion"
    
        })
    
     }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"fallò al editar su habitacion..."+error
    
        })
    
     }
  
}
async function eliminarhab(peticion=request,respuesta=response){
  let id=peticion.params.id
  try{
    await eliminarHabitacion(id)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito desapareciendo su habitacion"

    })

 }catch(error){
    respuesta.status(400).json({
        estado:false,
        mensaje:"fallò al intentar desaparecer su habitacion..."+error

    })

 }
}

module.exports={
    registrarhab,
    buscarhab,
    buscarhabi,
    editarhab,
    eliminarhab


}
