
const supertest = require("supertest");

import { Pool } from 'pg';
import { getPizza } from '../../models/pizzaModel';
const express = require('express');
// const app = express();
const app = require("../../app");


let server: any, agent: any;

beforeEach((done) => {
  server = app.listen(4000, (err: any) => {
    if (err) return done(err);

    agent = supertest.agent(server); // since the application is already listening, it should use the allocated port
    done();
  });
});
afterEach((done) => {
  return server && server.close(done);
});


it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
})

// describe('testing postgres', () => {

//   it('should test pizza', async () => {

//     // const pizza = await getPizza();
//     const res = await agent.get('/pizzas')
//     expect(res.status).toBe(201)

//     expect(res.body[0]).toHaveProperty("id");
//     expect(res.body[0]).toHaveProperty("name");
//     expect(res.body[0]).toHaveProperty("toppings");
//     expect(res.body[0]).toHaveProperty("price");

//   })


// });