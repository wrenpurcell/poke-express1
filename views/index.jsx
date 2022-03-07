const React = require('react')
const pokemon = require('../models/pokemon')
const headerStyle = {
    color: '#ffffff',
    backgroundColor: '#960606',
}
const pokeItems = pokemon.map((pokeItem)=>{
    return <li style={{textTransform:'capitalize'}}>{pokeItem.name}</li>
})

class Index extends React.Component {

   render () {
    return (
        <div>
            <h1 style ={headerStyle}>See all the Pokemon!</h1>
                <ul> 
                {pokeItems}
                </ul> 
        </div>
     )
    }
 }
 module.exports = Index