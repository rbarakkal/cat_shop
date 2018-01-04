var express = require('express');
var router = express.Router();

const featurecontroller = require('./../controllers/featurecontroller');

/* GET users listing. */
router.get('/:feature_id',featurecontroller.featureget);
// /*POST cat details. */
// router.post('/',featurecontroller.featurepost);
/*UPDATE cat details. */
router.put('/:feature_id',featurecontroller.featureput);
/*DELETE cat details. */
router.delete('/:feature_id',featurecontroller.featuredelete);
module.exports = router;
