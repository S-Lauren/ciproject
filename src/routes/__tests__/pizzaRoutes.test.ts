const pizzaController = require("../../controllers/pizzaController")
const supertest = require("supertest");
const app = require("../../server");



it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
})

describe('pizzaRoutes', () => {
  it("should respond with status 201 if no error ", async () => {
    // const pizza = await pizzaController.addPizza({ title: "Reine", toppings: "mozza" });

    await supertest(app).get("/pizzas")

    const res = await supertest(app)
      .get('/pizzas')
    expect(res.statusCode).toEqual(201)
    // expect(res.body.length).toBe(4);
    expect(res.body[0]).toHaveProperty("id");
    expect(res.body[0]).toHaveProperty("name");
    expect(res.body[0]).toHaveProperty('toppings')
    expect(res.body[0]).toHaveProperty('price')

  })
})
