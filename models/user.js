const mongoose = require('mongoose')

const userSchema = new mongoose.Schema (
    {
        name: {type: String, required:true},
        username: {type:String, required:true},
        email: {type:String, required:true},
        food_category: [{type: mongoose.Schema.Types.ObjectId, ref:"food_category"}],
        recipe: [{type: mongoose.Schema.Types.ObjectId, ref: "recipe"}],
    }, 
    {
        timestamps: true,
    },
)

module.exports = mongoose.model("User", userSchema)