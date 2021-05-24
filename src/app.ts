import cors from "cors";
import { Request, Response } from "express";

const express = require('express');
const pizzaRoutes = require("./routes/pizzaRoutes");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/", pizzaRoutes);


app.get("/", async (req: Request, res: Response) => {
    try {
        res.send("Type '/pizzas' after the url to see the JSON Pizzass 🍕")
    } catch (e) {
        res.status(500).json()
    }
})
const isProduction = process.env.NODE_ENV === 'production'
const origin = {
    origin: isProduction ? 'https://ci-app-node.herokuapp.com' : '*'
}

app.use(cors(origin))

module.exports = app