const { databaseFile } = require('../controller/userController');
const { readFilePromise } = require("../helpers/fileHelper");

async function adminMiddleware(req, res, next) {
    const users = await readFilePromise(databaseFile);
    const user = users.find(item => req.body.userId == item.id)
    if (!user) {
        res.status(403).json({message: "User unknown"})
    } else {
        next();
    }
}

module.exports = { adminMiddleware }