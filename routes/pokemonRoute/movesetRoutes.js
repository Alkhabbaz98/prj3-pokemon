const express = require('express')
const router = express.Router()
const movesetController = require('../../controllers/movesetController')

router.post('/new', movesetController.createMoveset)
router.get('/', movesetController.movesetIndex)
router.get('/:id', movesetController.showMoveset)
router.put('/:id', movesetController.updateMoveset)
router.delete('/:id', movesetController.deleteMoveset)
module.exports = router