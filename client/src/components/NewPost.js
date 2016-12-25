import React from 'react';
import axios from 'axios';
// import {browserHistory} from 'react-router';

class NewPost extends React.Component {
  constructor(){
    super();
    this.state={
      work:false
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    this.setState({work:true})
    axios.post('http://localhost:3000/posts',{title,content})
      .then(
        // res => {this.context.router.push('/');
        // res => {browserHistory.push('/');
        res => {this.props.router.push('/');
     })
  }
  render(){
    return(
      <div className='new-post'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='标题' name='title' ref='title'/><br/>
          <input type='text' placeholder='内容' name='content' ref='content'/><br/>
          <input type='submit' value='发表' className='btn' disabled={this.state.work}/>
        </form>
      </div>
    )
  }
}

// NewPost.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default NewPost;
