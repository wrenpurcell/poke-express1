require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon.js')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res) => {
    res.render('Index')
})
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon: pokemon[req.params.id]})
})
app.get('/pokemon/new', (req, res)=>{
    res.render('New');
});
app.post('/pokemon/', (req, res)=>{
    res.send('received');
});

app.listen(port,() => {
    console.log('listening on port' , port)
})