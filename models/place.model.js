const { Schema, model} = require('mongoose')

const Place = model('Place', {
    name:{
        type: String,
        required: true,
    },
    location:{
        lat: Number,
        long: Number,
    },
    userId: {
        type: Schema.Types.ObjectID,
        ref: 'Client',
    },
    cityId: {
        type: Schema.Types.ObjectID,
        ref: 'City',
    },
})

module.exports = Place