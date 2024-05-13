const express = require('express')
const router = express.Router()

const gameController = require('../controller/gameController')

router.get('/', gameController.getGames)
router.post('/add',gameController.addGame)
router.delete('/delete/:id',gameController.removeGame)

module.exports = router