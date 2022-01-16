const mongoose = require('mongoose');


const foodCategorySchema = new mongoose.Schema (
    {
        name : {type: String, required:true},
        user: {type: mongoose.Schema.Types.ObjectId, ref:"user"},
        recipe: [{types: mongoose.Schema.Types.ObjectId, ref:"recipe"}],
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model("Food_category", foodCategorySchema); 