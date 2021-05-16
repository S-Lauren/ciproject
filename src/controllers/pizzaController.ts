import { Response, Request } from 'express';

const pool = require("../dbconfig/dbConnector");
export const pizzaList = async (req: Request, res: Response) => {

  pool.query('SELECT * FROM pizza', (error: any, results: any) => {

    res.status(200).json(results.rows)
  })


}


export const addPizza = async (req: Request, res: Response) => {
  const { name, toppings, price } = req.body
  pool.query(
    "INSERT INTO pizza (name, toppings, price) VALUES ($1, $2, $3)",
    [name, toppings, price], (error: any, results: any) => {

      res.status(201).send(`Pizza added with ID: ${results.insertId}`)
    })

}
