const sql = require('mysql2/promise')
const dotenv = require('dotenv')
dotenv.config();

const db = sql.createPool({
    host: `${process.env.SQL_HOST}`,
    user: `${process.env.SQL_USER}`,
    password:`${process.env.SQL_PASSWORD}`,
    database: `${process.env.SQL_DB_NAME}`,
})

module.exports = db;