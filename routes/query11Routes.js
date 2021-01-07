const router = require('express').Router()
const query11Controller = require('../controllers/query11Controller.js')

router.get('/', query11Controller.renderMain)

router.post('/postQuery11', query11Controller.postQuery11)

module.exports = router