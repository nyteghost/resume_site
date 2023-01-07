const dotenv = require('dotenv')
dotenv.config()

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.HEROKU_DB_URI,
    ssl: {
        rejectUnauthorized: false
    }
});



console.log('Connecting to database...')
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT * from boardgames', (err, result) => {
        release()
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log(result.rows)
    })
}
)

const getBoardgames = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM boardgames ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
const createBoardgame = (body) => {
    return new Promise(function(resolve, reject) {
        const { title, genre, played, rating, campaign } = body
        pool.query('INSERT INTO boardgames (title, genre, played, rating, campaign) VALUES ($1, $2) RETURNING *', [title, genre, played, rating, campaign], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new boardgame has been added added: ${results.rows[0]}`)
        })
    })
}
const deleteMerchant = () => {
    return new Promise(function(resolve, reject) {
        const id = parseInt(request.params.id)
        pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Merchant deleted with ID: ${id}`)
        })
    })
}

module.exports = {
    getBoardgames,
    createBoardgame,
    deleteMerchant,
}

