const mongoose = require('mongoose')
const Article = mongoose.model('Article',{
//relation 1 à n
    title: {
        type: String,
        required: true,
      },
      idAuthor: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        
      },
      content: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      tags : {
        type : Array
      }
})
module.exports = Article ;

