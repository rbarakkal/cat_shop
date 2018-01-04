var express = require('express');
var router = express.Router();

const catController = require('./../controllers/catcontroller');



/* GET users listing. */
router.get('/:cat_id',catController.catget);
/*POST cat details. */
router.post('/',catController.catpost);
/*UPDATE cat details. */
router.put('/:cat_id',catController.catput);
/*DELETE cat details. */
router.delete('/:cat_id',catController.catdelete);
module.exports = router;
