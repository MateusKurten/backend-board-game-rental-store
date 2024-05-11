const {Validator} = require('jsonschema')
const validator = new Validator()

const userSchema = {    
    type: "object",
    properties: {
        id: {type: 'string'},
        email: {type: 'string'},
        password: {type: 'string'}
    },
    "required": ['email','password']
  }

  const validateDataUser = (e)=>{
    return validator.validate(e,userSchema)
  }

  module.exports= {validateDataUser}   
