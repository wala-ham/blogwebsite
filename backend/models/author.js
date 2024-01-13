const mongoose = require('mongoose')

const Author = mongoose.model('Author',{
    name: {
        type: String,
        required: true,
      },
    lastname: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
        unique : true,
      },
    password: {
        type: String,
        required: true,
      },
    about: {
        type: String,
        required: true,
      },
    image: {
        type: String,
        required: true,
      }
   
})
module.exports = Author ;

