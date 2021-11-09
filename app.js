const express = require('express')
const app = express()
const ServidorModelo = require("./models/ServidorModelo.js");
require('dotenv').config()
const servidorHotel= new ServidorModelo();

servidorHotel.despertarservidor();

 
// app.get('/avanzada/hotel/v1', function (req, res) {
//   res.send('Hola este es el paso 1')
// })
 
// app.listen(3000, function(){
//     console.log("servidor encendido...")
// })