const pizzaController = require("../../controllers/pizzaController")
const supertest = require("supertest");
const app = require("../../app");


// let server: any, agent;

it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
})

describe('pizzaRoutes', () => {
  it("should display a pizza 🍕 ", async () => {
    const res = await supertest(app)
      .get('/pizzas')
    expect(res.statusCode).toEqual(201)
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty("id");
    expect(res.body[0]).toHaveProperty("name");
    expect(res.body[0]).toHaveProperty('toppings')
    expect(res.body[0]).toHaveProperty('price')
  })
})

