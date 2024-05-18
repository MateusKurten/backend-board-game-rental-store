const express = require('express')
const router = express.Router()
const { adminMiddleware } = require('../middleware/admin');
const { validateSlide } = require('../middleware/validateSlide');


const slideController = require('../controller/slideController')

router.get('/', slideController.getSlides)
router.post('/add', [adminMiddleware, validateSlide], slideController.addSlide)
router.delete('/delete/:id', adminMiddleware, slideController.removeSlide)
router.put('/order/:id', adminMiddleware, slideController.changeOrder)

module.exports = router