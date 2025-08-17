const express = require('express')
const router = express.Router()
const movesetController = require('../../controllers/movesetController')

router.post('/new', movesetController.createMOveset)
router.get('/', movesetController.movesetIndex)
router.get('/:id', movesetController.showMOveset)
router.put('/:id', movesetController.updateMOveset)
router.delete('/:id', movesetController.deleteMOveset)
module.exports = router