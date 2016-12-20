import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
  render(){
    return(
      <div>
        <Link to='/'>App</Link>
        <Link to='/hello1'>Hello1</Link>
        <Link to='/hello2'>Hello2</Link>
        {this.props.children}
      </div>
    )
  }
}

export default App;
