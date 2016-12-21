import React from 'react';
import {Link} from 'react-router'

class Header extends React.Component {
  render(){
    return(
      <div className='header'>
        <h1>Snow's</h1>
        <Link to='/'>Snow's</Link>
      </div>
    )
  }
}

export default Header;
