
import { Response } from 'express';
import express from 'express';

const app = express()
const server = require('http').createServer(app)
const pizzaRoutes = require("./routes/pizzaRoutes");
require("dotenv").config();
const PORT = process.env.PORT || 5000

app.use(express.json());
// app.use(express.urlencoded());
app.use("/", pizzaRoutes);






app.get("/", async (req, res: Response) => {
    try {
        res.json({ ok: true })
    } catch (e) {
        console.log(e)
        res.status(500).json()
    }
})


server.listen(PORT, () => console.log('Hoooooooooo le nouveau de manau '))

module.exports = server;