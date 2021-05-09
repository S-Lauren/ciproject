import * as pizzaCtrl from './controllers/pizzaController';
import { Response } from 'express';
import express from 'express';

const app = express()
const server = require('http').createServer(app)
const pizzaRoutes = require("./routes/pizzaRoutes");

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded());
app.use("/", pizzaRoutes);

app.get("/", async (req, res: Response) => {
    try {
        const test = await pizzaCtrl.pizzaList(req, res)
        res.status(200).json(test)
    } catch (e) {
        console.log(e)
    }
})


server.listen(PORT, () => console.log('Hoooooooooo le nouveau de manau '))

module.exports = server;