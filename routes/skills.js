var express = require('express');
var router = express.Router();
const Skill = require('../models/skills');
const indexCtrl = require('../controllers/skills')


router.get('/', indexCtrl.index);
router.post('/', indexCtrl.create) 

router.get('/new', indexCtrl.new)
router.delete('/:id', indexCtrl.delete)




//1
// GET /skills/new
// Post
//Delete /skills/:id

module.exports = router;