//REQUIRING MONGOOSE
const mongoose = require('mongoose');


const foodCategorySchema = new mongoose.Schema (
    {
        name : {type: String},
        user: {type: mongoose.Schema.Types.ObjectId, ref:"user"},
        recipe: [{type: mongoose.Schema.Types.ObjectId, ref:'Recipe'}],
    },
    {
        timestamps: true,
    },
);

//MODEL EXPORT
module.exports = mongoose.model("Food_category", foodCategorySchema); 
