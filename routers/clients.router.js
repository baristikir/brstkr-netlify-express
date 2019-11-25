const {Router} = require('express')
const paginate = require('../services/paginate.service')
const Client = require('../models/clients.model')

const router = new Router()

const serializer = (client) => {
    return user.toObject({ versionKey: false })
}

router.get('/', async (req, res) => {
    const clients = await paginate(Client.find({}), req)
    res.send(clients.map(serializer))
})

router.post('/', async (req, res) => {
    const client = await new Client(req.body.client).save()
    res.send(serializer(client))
})

module.exports = router