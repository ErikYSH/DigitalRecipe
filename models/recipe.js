//REQUIRING MONGOOSE
const mongoose = require('mongoose');

//RECIPE SCHEMA
const recipeSchema = new mongoose.Schema(
    {
        name:{type: String, required:true},
        cook_time: {type: String, required:true},
        prep_time: {type: String, required:true},
        portion: {type: String, required:true},
        ingredient_img: {data:Buffer, contentType: String},
        ingredient: {type:String},
        comment: {type: String},
        food_category: {type: mongoose.Schema.Types.ObjectId, ref:"food_category"},
        user: {type: mongoose.Schema.Types.ObjectId, ref:"user"},
    },
    {
        timestamps: true,
    },
)
//MODEL EXPORT
module.exports = mongoose.model("Recipe", recipeSchema);

