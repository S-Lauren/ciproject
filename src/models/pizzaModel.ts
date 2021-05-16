

const pool = require("../dbconfig/dbConnector");

export const getPizza = async () => {
  try {
    const rows = await pool.query("SELECT * FROM pizza");
    return rows;
  } catch (err) {
    console.log(err);
  }
}
export const createPizza = async (name: string, toppings: string, price: number) => {
  try {
    pool.query(
      "INSERT INTO pizza (name, toppings, price) VALUES ($1, $2, $3)",
      [name, toppings, price])
  } catch (e) {
    console.log(e)
  }
}


