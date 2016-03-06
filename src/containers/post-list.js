import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class PostList extends Component {

  renderList() {
    // console.log(this.props, 'logging this props');
    return this.props.posts.map(post => {
      return (
          <li key={post.title} className="list-group-item">{post.title}</li>
        );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(PostList);