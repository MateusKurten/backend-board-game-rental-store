const { validateDataSlide } = require("../model/slideModel")

function validateSlide(req, res, next) {
    delete req.body.userId;
    const validR = validateDataSlide(req.body);
    if (!validR.valid) {
        return res.status(400).json({message:'Invalid Data', errors: validR.errors})
    }

    next();
}

module.exports = { validateSlide }