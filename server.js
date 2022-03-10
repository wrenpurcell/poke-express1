require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const pokemon = require('./models/pokemon')
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/pokemon/seed', (req, res) => {
    pokemon.create([
        {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
        {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
        {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
        {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
        {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
        {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
        {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
    ], (err, data) => {res.redirect('/pokemon')}
    )
})

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res) => {
    pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon
        })
    })
})
app.get('/pokemon/new', (req, res)=>{
    res.render('New')
})
app.post('/pokemon/', (req, res)=>{
    pokemon.create(req.body, (error, createdPokemon) => {
    res.redirect('/pokemon')
    res.send('received')    
    })
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon: pokemon[req.params.id]})
    pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.send(foundPokemon)
    })
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