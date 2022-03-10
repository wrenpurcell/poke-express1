const React = require('react')
class New extends React.Component {
    render() {
      return (
          <div>
              <h1>Add a Pokemon!</h1>
              <form action="/pokemon" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Image link: <input type="text" name="imglink" /><br/>
                  <input type="submit" name="" value="Create Pokemon"/>
               </form>
          </div>
            )
    }
}
module.exports = New