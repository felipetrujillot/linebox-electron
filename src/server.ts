import express from 'express'
import bodyParser from 'body-parser'
import { newPrint } from './print.js'

const server = express()

server.use(bodyParser.json())

server.post('/api/message', (req, res) => {
    const { message } = req.body
    console.log('Received message:', message)
    newPrint(message)
})

export default server
