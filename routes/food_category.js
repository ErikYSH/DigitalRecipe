const router = require('express').Router();
const ctrl = require("../controllers");

//INPUT ROUTES TO FOOD_CAT CONTROLLER
router.get("/", ctrl.food_category.idx);
router.get("/new", ctrl.food_category.newFood_category);
router.get("/:id", ctrl.food_category.show);
router.post("/", ctrl.food_category.create);
router.put("/:id", ctrl.food_category.update);
router.delete("/:id", ctrl.food_category.destroy);
router.get("/:id/edit", ctrl.food_category.edit);

module.exports = router;