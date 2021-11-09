//aquitraje a router de express
const{Router}=require('express')


//variable para personalizar mis rutas
const rutas=Router()

//importo los controladores
const{ registrarreserva, buscarreserva, buscarreservas, editarreserva, eliminarreserva}=require('../controllers/controladorres.js')
const{registrarhab, buscarhabi, buscarhab, editarhab, eliminarhab}=require('../controllers/controladorhab.js')

//rutas del api

//rutas habitaciones
  rutas.get('/avanzada/hotel/v1/id',buscarhab)
  rutas.get('/avanzada/hotel/v1',buscarhabi)
  rutas.post('/avanzada/hotel/v1/id',registrarhab)
  rutas.put('/avanzada/hotel/v1/id',editarhab)
  rutas.delete('/avanzada/hotel/v1/id',eliminarhab)

  //rutas para reservas
  rutas.get('/avanzada/reserva/v1/id',buscarreserva)
  rutas.get('/avanzada/reserva/v1',buscarreservas)
  rutas.post('/avanzada/reserva/v1/id',registrarreserva)
  rutas.put('/avanzada/reserva/v1/id',editarreserva)
  rutas.delete('/avanzada/reserva/v1/id',eliminarreserva)

  module.exports=rutas
