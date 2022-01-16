const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);
router.get('/new', indexCtrl.new);
router.get('/:id', indexCtrl.show);
router.post('/', indexCtrl.create);

module.exports = router;
