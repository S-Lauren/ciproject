const express = require("express");
const router = express.Router();
import * as pizzaController from '../controllers/pizzaController';

router.get('/pizzas', pizzaController.pizzaList);
router.post('/pizzas', pizzaController.addPizza)

module.exports = router;