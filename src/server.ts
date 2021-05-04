import { Response } from 'express';
import express from 'express';
const app = express()
const server = require('http').createServer(app)
const pizzaRoutes = require("./routes/pizzaRoutes");

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded());
app.use("/", pizzaRoutes);


server.listen(PORT, () => console.log('Hoooooooooo le nouveau de manau '))

module.exports = server;