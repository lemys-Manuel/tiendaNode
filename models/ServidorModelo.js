const express = require('express')
const cors = require('cors')
//importacion de la conexion
const{conectarBD}=require('../database/conexion.js')

//traer las rutas
const rutas=require('../routes/rutas.js')

class ServidorModelo{
    //contstructor de la clase
    constructor(){
        this.app = express()
        this.despertarBD()
        this.llamarAuxiliares()
        this.enrutarpeticiones()
    }
    //despertar el servidor
    despertarservidor(){
        this.app.listen(process.env.PORT, function(){
            console.log("servidor encendido..."+ process.env.PORT);
        })
    }

    //enrutar peticiones
    enrutarpeticiones(){
        this.app.use('/',rutas)
    }

    despertarBD(){
      conectarBD()

    }
    llamarAuxiliares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

}
module.exports=ServidorModelo