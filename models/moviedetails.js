const mongoose = require('mongoose')

const movie = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    director:{
        type:String,
        required:true,
    },
    cast:{
        type:String,
    },
    synopsis:{
        type:String,
    },
    release:{
        type:String,
    },
    showtime:{
        type:String,
    }

})

module.exports = mongoose.model('moviedetails',movie)