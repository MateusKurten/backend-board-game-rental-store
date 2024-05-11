const {Validator} = require('jsonschema')
const validator = new Validator()

const slideSchema = {    
    type: "object",
    properties: {
        id: {type: 'string'},
        img: {type: 'string'},
        order: {type: 'number', minimum: 1}
    },
    "required": ['img','order']
  }

  const validateDataSlide = (e)=>{
    return validator.validate(e,slideSchema)
  }

  module.exports= {validateDataSlide}   
