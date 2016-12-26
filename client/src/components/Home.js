import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import filter from 'lodash/fp/filter';

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentWillMount(){
    axios.get('http://localhost:3000/posts')
      .then( res => this.setState({data:res.data.posts}) )
  }
  handleClick(id){
    const posts = filter( post => {
      return post._id !== id
    },this.state.data);
    this.setState({data:posts})
  }
  render(){
    let postList = this.state.data.map( (post,i) => (
      <div className='post-card' key={i}>
        <Link to={`/posts/${post._id}`}>{post.title}</Link>
        <div style={{float:'right'}}>
          <Link to={`/edit/${post._id}`}>修改</Link>||
          <span className='del-btn' onClick={this.handleClick.bind(this,post._id)}>删除</span>
        </div>
      </div>
    ) );
    return(
      <div>
        <Link to='/new' className='new-btn'>New Post</Link>
        {postList}
      </div>
    )
  }
}

export default Home;
