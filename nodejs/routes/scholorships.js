var express = require('express');
var router = express.Router();
var scholorship = require("../controllers/scholarships")

/* GET users listing. */
router.get('/', scholorship.getAll);
router.post('/add', scholorship.create);
router.post('/cycle', scholorship.createCycle);
router.get('/get-cycle', scholorship.getScholorshipCycle)
router.get('/:id', scholorship.getScholorship)
router.post('/update', scholorship.update)
router.delete('/:id', scholorship._delete);

module.exports = router;
