const {Validator} = require('jsonschema')
const validator = new Validator()

const gameSchema = {    
    type: "object",
    properties: {
        id: {type: 'string'},
        game: {type: 'string', minLength: 3, maxLength: 50},
        difficulty: {type: 'string'},
        maxplayers: {type: 'number', maximum: 18},
        minplayers: {type: 'number', minimum: 2},
        price: {type:'number', minimum: 0},
        roundtime:{type:'number', minimum: 0},
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

  const validateDataGame = (e)=>{
    return validator.validate(e,gameSchema)
  }

  module.exports = {validateDataGame}
