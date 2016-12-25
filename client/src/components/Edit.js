import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

class Edit extends React.Component {
  constructor(){
    super();
    this.state={
      work:false,
      title:'',
      content:''
    }
  }
  componentWillMount(){
    axios.get(`http://localhost:3000/posts/${this.props.params.id}`)
      .then( res => this.setState({
        title:res.data.post.title,
        content:res.data.post.content
      }) )
  }
  handleChange(e){
    this.setState({title:e.target.value})
  }
  handleChange1(e){
    this.setState({content:e.target.value})
  }
  render(){
    return(
      <div className='new-post'>
        <form>
          <input type='text' value={this.state.title} name='title' ref='title' onChange={this.handleChange.bind(this)}/><br/>
          <input type='text' value={this.state.content} name='content' ref='content' onChange={this.handleChange1.bind(this)}/><br/>
          <input type='submit' value='更新' className='btn' disabled={this.state.work}/>
          <Link to='/' className='btn'>取消</Link>
        </form>
      </div>
    )
  }
}

export default Edit;
