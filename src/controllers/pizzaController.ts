import { Response, Request } from 'express';
import * as pizzaModel from '../models/pizzaModel';
const pool = require("../dbconfig/dbConnector");
export const pizzaList = async (req: Request, res: Response) => {

  pool.query('SELECT * FROM pizza', (error: any, results: any) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })


}


export const addPizza = async (req: Request, res: Response) => {

  try {
    const { name, toppings, price } = req.body;
    await pizzaModel.createPizza(name, toppings, price)
    res.sendStatus(201);
  } catch (e) {
    console.log(e)
    res.status(500).json()
  }

}
