import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class PostDetail extends Component {
  render() {
    if (!this.props.post) {
      return <div>Select a post to get started.</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.post.title}</div>
        <div>{this.props.post.user}</div>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    post: state.activePost
  };
}

export default connect(mapStateToProps)(PostDetail);