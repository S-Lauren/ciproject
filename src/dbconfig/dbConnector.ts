
// const Pool = require('pg').Pool;
require('dotenv').config()
// const pool = new Pool({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DB,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT
// });
// pool.connect()

// module.exports = pool;
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,

});

pool.connect();

// pool.query('SELECT * FROM pizza', (err: any, res: any) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//         console.log(JSON.stringify(row));
//     }

// });
module.exports = pool;