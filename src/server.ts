import express from 'express';
import { Request, Response } from 'express'
// const path = require("path")

const app = express()
const server = require('http').createServer(app)

const pizzaRoutes = require("./routes/pizzaRoutes");


const PORT = process.env.PORT || 5000

// app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use("/", pizzaRoutes);


app.get("/", async (req, res: Response) => {
    try {
        res.send({ ok: true })
    } catch (e) {
        console.log(e)
        res.status(500).json()
    }
})

// app.get('/index', (request, response) => {
//     response.sendfile('./src/index.html');
// });

server.listen(PORT, () => console.log('Hoooooooooo le nouveau de manau '))

module.exports = server;