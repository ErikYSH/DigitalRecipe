const router = require('express').Router();
const ctrl = require("../controllers");//SOMETHINGS NOT CONNECTED HERE..


//WHERE I WILL INPUT CRUD ROUTES TO USERS CONTROLLERS
router.get("/", ctrl.user.idx);
router.get("/new", ctrl.user.newUser);
router.get("/:id", ctrl.user.show);
router.post("/", ctrl.user.create);
router.put("/:id", ctrl.user.update);
router.delete("/:id", ctrl.user.destroy);
router.get("/:id/edit", ctrl.user.edit);

module.exports = router;