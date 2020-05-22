const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('hello word')
})

app.listen(6679, () => {
    console.log('server running on port 8000')
})