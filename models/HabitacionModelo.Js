//importo las utilidades models ,y schema de mongoose
const {model,Schema}=require('mongoose')

//programar mi modelo de datos
const HabitacionModelo=Schema({
    nombrehabitacion:{type:String,
        required:true
    },
    fotografia:{
        type:String,
        required:true

    },
    descripcion:{
        type:String,
        required:false

    },
    precioadulto:{
        type:Number,
        required:true

    },
    precioniño:{
        type:Number,
        required:false

    }

})
module.exports=model('habitaciones',HabitacionModelo)