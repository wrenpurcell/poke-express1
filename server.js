require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const pokemon = require('./models/pokemon')
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon})
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon: pokemon[req.params.id]})
})

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
})  

app.listen(port,() => {
    console.log('listening on port' , port)
})