const express = require('express')
const mysql = require('mysql')

const config = {
    host: 'db',
    port: 3306,
    database: 'node_db',
    user: 'root',
    password: 'root'
}

const nomes = ['wesley', 'Luiz', 'Josemar', 'Serafim']



const app = express()
const PORT = 3000

const connection = mysql.createConnection(config)

const createTable = `
    CREATE TABLE IF NOT EXISTS people(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    )
`

const queryInsert = `
        INSERT INTO people(name)
        VALUES (?)
    `



const selectQuery = 'SELECT * FROM people'

app.get('/', (req, res) => {
    let nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];

    connection.query(createTable, (err) => {
        if (err) {
            console.error('Erro ao criar tabela:', err)
            return
        }


        connection.query(queryInsert, [[nomeAleatorio]], (err, result) => {
            if (err) {
                console.error('Erro ao inserir:', err)
                return
            }

            console.log(`${result.affectedRows} pessoas inseridas`)
        })
    })
    connection.query(selectQuery, (erro, result) => {

        const nomes = result.map(person => `<li>${person.name}</li>`).join('')

        const html = `
            <h1>Full Cycle Rocks!</h1>
            <ul>${nomes}<ul>
            `
        if (!erro) {
            return res.status(500).send(html)
        }
    })
})

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})