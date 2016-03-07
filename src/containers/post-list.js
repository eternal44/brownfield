import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectPost } from '../actions/index';
import { bindActionCreators } from 'redux';

class PostList extends Component {

  renderList() {
    // console.log(this.props, 'logging this props');
    return this.props.posts.map(post => {
      return (
          <li key={post.title} 
          onClick={() => this.props.selectPost(post)}
          className="list-group-item">
          {post.title}
          </li>
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

// anything returned from this function will end up as props on the post list container
function mapDispatchToProps(dispatch) {
  // whenever select post is called result should be passed to all of our reducers
  return bindActionCreators({ selectPost }, dispatch);
}

// promote post list from a component to a container when using connect. dispatch method => make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(PostList);