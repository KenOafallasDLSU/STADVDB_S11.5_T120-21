const router = require('express').Router()
const query32Controller = require('../controllers/query32Controller.js')

router.get('/', query32Controller.renderMain)

router.post('/postQuery32', query32Controller.postQuery32)

module.exports = router