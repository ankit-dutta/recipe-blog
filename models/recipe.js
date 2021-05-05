const mongoose = require('mongoose');
const Review = require('./review');


const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
    },
    desc:{
        type:String,
        
    },
    ingridient:{
       type:String,
    },
    procedure:{
        type:String
    },
    nutrients:{
        type:String
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }

    ]
       
    
})

const Recipe = mongoose.model('Recipe',recipeSchema);
module.exports = Recipe;