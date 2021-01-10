const router = require('express').Router()
const query22Controller = require('../controllers/query22Controller.js')

router.get('/', query22Controller.getQuery22)

router.post('/postQuery22', query22Controller.postQuery22)

module.exports = router