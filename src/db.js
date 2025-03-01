import {createPool} from 'mysql2/promise'
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT} from './config.js'
// import {DB_URL} from './config.js'

export const pool = createPool(
    {
        host: DB_HOST,
        port: DB_PORT,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASSWORD
    }
)

// console.log('DB_URL: ', DB_URL)
// export const pool = createPool(DB_URL+'&connectionLimit=10')
