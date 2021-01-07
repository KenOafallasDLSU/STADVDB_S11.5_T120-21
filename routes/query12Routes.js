const router = require('express').Router()
const query12Controller = require('../controllers/query12Controller.js')

router.get('/', query12Controller.renderMain)

router.post('/postQuery12', query12Controller.postQuery12)

module.exports = router