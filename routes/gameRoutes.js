const express = require('express')
const router = express.Router()
const { adminMiddleware } = require('../middleware/admin');
const { validateGame } = require('../middleware/validateGame');

const gameController = require('../controller/gameController')

router.get('/', gameController.getGames)
router.post('/add', [adminMiddleware, validateGame], gameController.addGame)
router.delete('/delete/:id', adminMiddleware, gameController.removeGame)

module.exports = router