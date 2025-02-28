import express from 'express'
import {pool} from './db.js'
import { DB_PORT } from './config.js'

const app = express()

app.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    //res.send('Welcome to ELB server')
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

app.listen(DB_PORT)
console.log('Server omn port ', DB_PORT)