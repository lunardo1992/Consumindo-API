// habilitando o CORS, para poder acessar meu localhost:4567 no localhost:3000 
const cors = require('cors')

// Rota para acessar a API
const express = require('express')
const app = express()
const axios = require('axios')
app.use(cors())
// consumindo API no Backend
app.get('/', async(req, res) => {
    
    try {
        //response é a resposta do axios MAIS eu tiro o data de dentro do response
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    
    return res.json(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen('4567')