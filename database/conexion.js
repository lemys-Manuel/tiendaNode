const mongoose = require('mongoose');

async function conectarBD(){
    //try significa intente
    try{
        await mongoose.connect(process.env.BASEDATOS);
        console.log("conectado con èxito a la  Base-Datos");
     //nos permite  capturar el error n  caso que no conecte
    }catch(error){
        console.log(`fallamos en el intento revisar--> ${error}`)

    }
}
// de esta forma exporto la conexion para que pueda ser usada por el servidor modelo
module.exports={
   conectarBD
}