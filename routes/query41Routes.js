const router = require('express').Router()
const query41Controller = require('../controllers/query41Controller.js')

router.get('/', query41Controller.renderMain)

router.post('/postQuery41', query41Controller.postQuery41)

module.exports = router