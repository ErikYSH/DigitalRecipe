//REQUIRING MONGOOSE
const mongoose = require("mongoose");

//RECIPE SCHEMA
const recipeSchema = new mongoose.Schema(
  {
    name: { type: String },
    cook_time: { type: String },
    prep_time: { type: String },
    portion: { type: String },
    ingredient_img: { type: String },
    ingredient: [String],
    direction: { type: String },
    comment: { type: String },
    food_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "food_category",
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);
//MODEL EXPORT
module.exports = mongoose.model("Recipe", recipeSchema);
