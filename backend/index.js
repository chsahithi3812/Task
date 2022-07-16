const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(express.json())
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://${process.env.name}:${process.env.pw}@cluster0.btie5.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})

app.use(cors())
app.use(require('./routes/auth.js'))

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}...`)
})