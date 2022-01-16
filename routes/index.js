const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
//   res.redirect('/recipe');
});

module.exports = router

//EVERYTHING TO BE ROUTED THROUGH HERE-DOES THIS GO HERE? THIS IS HOW I HAVE IT ON EXPRESS BLGO
// module.exports = {
//     user: require("./user"),
//     recipe: require("./recipe"),
//     food_category: require("./food_category"),
// };

