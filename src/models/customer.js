'use strict'

const mongoose = require('mongoose'); // Correção da importação
const Schema = mongoose.Schema;

const schema = new Schema({
    // Aqui ele vai criar um _id automaticamente
    name:{
        type: String,
        required: [true, 'Nome e obrigatorio'], // true,
    },
    email:{
        type: String,
        required: [true, 'Nome e obrigatorio'], // true,
    },
    password:{
        type: String,
        required: [true, 'Nome e obrigatorio'], // true,
    },
});

module.exports = mongoose.model('Customer', schema);
