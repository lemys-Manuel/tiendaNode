//importo las utilidades models ,y schema de mongoose
const {model,Schema}=require('mongoose')

//programar mi modelo de datos
const ReservaModelo=Schema({
    nombre_Cliente:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    fechainicio:{
        type:Date,
        required:true
    },
    fechafinal:{
        type:Date,
        required:true
    },
    numeropersonas:{
        type:Number,
        required:true
    }

})
module.exports=model('reservas',ReservaModelo)