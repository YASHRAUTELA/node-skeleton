'use strict';
const mongoose = require('mongoose');
module.exports = async function(app){
    await mongoose.connect('mongodb://localhost/letschat',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
}