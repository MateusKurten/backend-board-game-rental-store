const { validateDataUser } = require("../model/userModel")

function validateUser(req, res, next) {
    const validR = validateDataUser(req.body);
    if (!validR.valid) {
        return res.status(400).json({message:'Invalid Data', errors: validR.errors})
    }

    next();
}

module.exports = { validateUser }