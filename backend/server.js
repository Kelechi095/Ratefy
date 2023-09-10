require('dotenv').config()
const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`serving is listening on port ${PORT}`)
})