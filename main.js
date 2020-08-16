const express = require('express')
const app = express()
const port = 2002


const timerouter = require('./time')


app.use('/time-conveter/add', timerouter)

//akses port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})