const express = require('express')
const router = express.Router();
const { adminMiddleware } = require('../middleware/admin');
const { validateUser } = require('../middleware/validateUser');

const userController = require('../controller/userController')

router.post('/login', validateUser, userController.login)
router.post('/add', validateUser, userController.addUser)
router.delete('/delete', adminMiddleware, userController.removeUser)

module.exports = router