import express from 'express';
// import { Request, Response } from 'express'
// const path = require("path")

const app = express()
const server = require('http').createServer(app)
const cors = require("cors");
const pizzaRoutes = require("./routes/pizzaRoutes");
const { pool } = require("./dbconfig/dbConnector")

const PORT = process.env.PORT || 5000

// app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.get("/pizzas", pizzaRoutes);


// app.get("/", async (req, res: Response) => {
//   try {
//     res.send({ ok: true })
//   } catch (e) {
//     console.log(e)
//     res.status(500).json()
//   }
// })

// app.get('/index', (request, response) => {
//     response.sendfile('./src/index.html');
// });

// const getPizza = (request: Request, response: Response) => {
//   pool.query('SELECT * FROM pizza', (error: any, results: any) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// app
//   .route('/pizzas')
//   // GET endpoint
//   .get(getPizza)


// Origin for cors
const isProduction = process.env.NODE_ENV === 'production'
const origin = {
  origin: isProduction ? 'https://ci-app-node.herokuapp.com' : '*'
}

app.use(cors(origin))

server.listen(PORT, () => console.log('Hoooooooooo le nouveau de manau '))

module.exports = server;