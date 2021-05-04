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
      .expect(201)
      .then((response: any) => {
        // Check type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(1);

        // Check data
        // expect(response.body[0].id).toBe(pizza.id);
        // expect(response.body[0].name).toBe(pizza.name);
        // expect(response.body[0].toppings).toBe(pizza.toppings);

      });
  });

})

