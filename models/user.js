//REQUIRING MONGOOSE
const mongoose = require('mongoose')

//USER SCHEMA
const userSchema = new mongoose.Schema (
    {
        name: String,
        username: String,
        email: String,
        food_category: [{type: mongoose.Schema.Types.ObjectId, ref:"food_category"}],
        recipe: [{type: mongoose.Schema.Types.ObjectId, ref: "recipe"}],
    }, 
    {
        timestamps: true,
    },
)
//MODEL EXPORT
module.exports = mongoose.model("User", userSchema)