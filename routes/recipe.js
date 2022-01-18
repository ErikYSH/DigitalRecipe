const router = require('express').Router();
const ctrl = require("../controllers");

//WHERE I WILL INPUT ROUTES FOR FULL CRUD THAT MATCH BACK TO RECIPES CONTROLLERS
// router.get("/", ctrl.recipe.idx);
router.get("/", ctrl.recipe.homepages);
router.get("/category", ctrl.recipe.categoryIdx);
router.get("/new", ctrl.recipe.newRecipe);
router.get("/:id", ctrl.recipe.show);
router.post("/", ctrl.recipe.create);
router.put("/:id", ctrl.recipe.update);
router.delete("/:id", ctrl.recipe.destroy);
router.get("/:id/edit", ctrl.recipe.edit);

module.exports = router;