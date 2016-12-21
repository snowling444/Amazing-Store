import React from 'react';
import axios from 'axios';

class NewPost extends React.Component {
  constructor(){
    super();
  }
  handleSubmit(e){
    e.preventDefault();
    let data = {};
    data.title = this.refs.title.value;
    data.content = this.refs.content.value;
    axios.post('http://localhost:3000/posts',data)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' name='title' ref='title'/><br/>
          <input type='text' name='content' ref='content'/><br/>
          <input type='submit' value='发表'/>
        </form>
      </div>
    )
  }
}

export default NewPost;
