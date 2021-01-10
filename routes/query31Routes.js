const router = require('express').Router();
const query31Controller = require('../controllers/query31Controller.js');

router.get('/', query31Controller.renderMain);

router.post('/postQuery31', query31Controller.postQuery31);

module.exports = router;