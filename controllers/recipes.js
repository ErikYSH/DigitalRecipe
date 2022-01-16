const Movie = require('../models/movie');

//FUNCTION TO CREATE A NEW RECIPE
function create(req, res) {
    Movie.findById(req.params.id, function (err, movie) {
      movie.reviews.push(req.body);
      movie.save(function (err) {
        res.redirect(`/movies/${movie._id}`);
      });
    });
  }


module.exports = {
    create,
  };