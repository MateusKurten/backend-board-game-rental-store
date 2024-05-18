const { Validator } = require('jsonschema');
const validator = new Validator()

const gameSchema = {    
    type: "object",
    properties: {
        id: {type: 'string'},
        game: {type: 'string', minLength: 3, maxLength: 50},
        difficulty: {type: 'string'},
        maxplayers: {type: 'string', pattern: "^[0-9]+$"},
        minplayers: {type: 'string', pattern: "^[0-9]+$"},
        price: {type:'string', pattern: "^[0-9]+$"},
        roundtime:{type:'string', pattern: "^[0-9]+$"},
        img: {type:'string'},
    },
    "required": [
      'game',
      'difficulty',
      'minplayers',
      'maxplayers',
      'price',
      'roundtime'
    ]
  }

  const validateDataGame = (e) => {
    return validator.validate(e,gameSchema)
  }

  module.exports = { validateDataGame }
