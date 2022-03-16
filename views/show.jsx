const React = require('react')
const headerStyle = {
    color: '#ffffff',
    backgroundColor: '#960606',
}

class Show extends React.Component {

   render () {
       const { pokemon } = this.props
     
    return (
        <div>
            <h1 style ={headerStyle}>Gotta Catch 'Em All!</h1>
            <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2><br/>
            <img src={`${pokemon.img}.jpg`}></img><br/>
            <a href="/pokemon">Back</a>
        </div>
     )
    }
 }
 module.exports = Show