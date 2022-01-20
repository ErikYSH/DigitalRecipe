const router = require('express').Router();
const ctrl = require("../controllers");

//WHERE I WILL INPUT ROUTES FOR FULL CRUD THAT MATCH BACK TO RECIPES CONTROLLERS
// router.get("/", ctrl.recipe.idx);
router.get("/", ctrl.recipe.homepages);
router.get("/newRecipe", ctrl.recipe.categoryIdx);
router.get("/newRecipe", ctrl.recipe.newRecipe);
router.get("/:id", ctrl.recipe.show);
router.post("/", ctrl.recipe.createRecipe);
router.put("/:id", ctrl.recipe.updateRecipe);
router.delete("/:id", ctrl.recipe.destroyRecipe);
router.get("/:id/editRecipe", ctrl.recipe.editRecipe);

module.exports = router;