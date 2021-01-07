const router = require('express').Router();
const query21Controller = require('../controllers/query21Controller');

router.get('/', query21Controller.getQuery21);

router.post('/postQuery21', query21Controller.postQuery21);

module.exports = router;