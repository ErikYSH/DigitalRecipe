const Recipes = require('../models/recipes');

//FUNCTION TO CREATE NEW RECIPES
function create(req, res) {
    Recipes.findById(req.params.id, function (err, movie) {
      movie.reviews.push(req.body);
      movie.save(function (err) {
        res.redirect(`/movies/${movie._id}`);
      });
    });
  }


module.exports = {
    create,
  };