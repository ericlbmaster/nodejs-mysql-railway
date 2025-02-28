import express from 'express'
import {pool} from './db.js'
import {PORT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT} from './config.js'

const app = express()

app.get('/', async (req, res) => {
    res.send('Welcome to ELB server')
})

app.get('/app', async (req, res) => {
    res.send('Welcome to ELB server - Path APP')
})

app.get('/show', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
})

app.get('/ping', async (req, res) => {
    const [result]  = await pool.query('SELECT "hello world" as RESULT')
    console.log(result)
    res.json(result[0])
})

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO users(name VALUES ("John"))')
    res.json(result)
})

//app.listen(PORT)
app.listen(PORT, '::', () => {
    console.log(`Server listening on [::]${PORT}`);
});

//console.log('Server on port ', PORT)
console.log('<<<<< DB info >>>>>')
console.log('DB_HOST: ', DB_HOST)
console.log('DB_NAME ', DB_NAME)
console.log('DB_PORT ', DB_PORT)
console.log('DB_USER ', DB_USER)
console.log('DB_PASSWORD ', DB_PASSWORD)