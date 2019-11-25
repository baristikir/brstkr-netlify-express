const {model} = require('mongoose')

const Client = model('Client', {
    name: String,
    email: String
});

module.exports = Client