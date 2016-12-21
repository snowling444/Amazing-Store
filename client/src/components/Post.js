import React from 'react';

class Post extends React.Component {
  render(){
    console.log(this.props.params);
    return(
      <div>
        <h4>Hello</h4>
      </div>
    )
  }
}

export default Post;
