
CREATE TABLE pizza 
(
    id SERIAL PRIMARY KEY,
    name text  NOT NULL,
    toppings text NOT NULL,
    price INT NOT NULL
)

INSERT INTO pizza(name, toppings, price) VALUES ('Yurk pizza', 'chocolate, honey, cheese, tomato pasta', 15);