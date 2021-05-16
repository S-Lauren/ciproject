import { Response, Request } from 'express';
import * as pizzaModel from '../models/pizzaModel';

export const pizzaList = async (req: Request, res: Response) => {

  try {
    const rows = await pizzaModel.getPizza();
    res.status(201).json({ data: rows })
  } catch (e) {
    console.log(e)
    res.status(500).json()
  }

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
