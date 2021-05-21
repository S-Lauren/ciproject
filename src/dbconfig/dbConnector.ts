
// const Pool = require('pg').Pool;
require('dotenv').config()
// const pool = new Pool({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_PG,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT
// });
// pool.connect()

// module.exports = pool;
const { Pool } = require('pg');


const isProduction = process.env.NODE_ENV === 'production'

const connectionString =
    `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB}`

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
})

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,

// });

pool.connect();

// pool.query('SELECT * FROM pizza', (err: any, res: any) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//         console.log(JSON.stringify(row));
//     }

// });
module.exports = pool;