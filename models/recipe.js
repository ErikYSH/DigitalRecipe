const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
    {
        name:{type: String, required:true},
        cook_time: {type: String, required:true},
        prep_time: {type: String, required:true},
        portion: {type: Number, required:true},
        ingredient_img: {data:Buffer, contentType: String},
        ingredient: [String],
        comment: [String],
        food_category: {type: mongoose.Schema.Types.ObjectId, ref:"food_category"},
        user: {type: mongoose.Schema.Types.ObjectId, ref:"user"},
    },
    {
        timestamps: true,
    },
)

module.exports = mongoose.model("Recipe", recipeSchema);