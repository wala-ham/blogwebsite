//3 Steps pour assurer la communication avec mongodb

/* 1st step  */
const mongoose = require('mongoose')
/* 2ndstep  */

mongoose.connect('mongodb://localhost:27017/bloghome')
        .then(()=>{
            console.log("Connected to Database")
        })
        .catch((err)=>{
            console.log("Error to connect to Database",err)
        })

/* 3rd step  */
module.exports=mongoose;
