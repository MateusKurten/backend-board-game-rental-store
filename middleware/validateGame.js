const { validateDataGame } = require("../model/gameModel")

function validateGame(req, res, next) {
    delete req.body.userId;
    const validR = validateDataGame(req.body);
    if (!validR.valid) {
        return res.status(400).json({message:'Invalid Data', errors: validR.errors})
    }
    next();
}

module.exports = { validateGame }