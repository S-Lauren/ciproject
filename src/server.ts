import { Response } from 'express';
import express from 'express';
const app = express()
const server = require('http').createServer(app)


const PORT = process.env.POSTGRES_PORT || 5000

app.use(express.json());

app.get('/', (req, res: Response) => {
    res.json({ user: 'geek' });
});

server.listen(PORT, () => console.log('Hoooooooooo le nouveau de manau '))