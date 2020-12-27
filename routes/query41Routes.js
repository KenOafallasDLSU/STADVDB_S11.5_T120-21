const router = require('express').Router()
const query41Controller = require('../controllers/query41Controller.js')

router.get('/', query41Controller.renderMain)

module.exports = router