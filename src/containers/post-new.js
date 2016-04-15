import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router';

class PostsNew extends Component {
  
  
  onSubmit(props) {
    this.props.createPost(props)
      .then(createdPost => {
        if (createdPost) {
          this.context.router.push('/');
        }
      });
  }
  
  render() {
    const { fields: { name, type, comment }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        
        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <label>Item Name</label>
          <input type="text" className="form-control" {...name} />
          <div className="text-help">
            {name.touched ? name.error: ''}
          </div>
        </div>
        
        <div className={`form-group ${type.touched && type.invalid ? 'has-danger' : ''}`}>
          <label>Item Type</label>
          <input type="text" className="form-control" {...type} />
          <div className="text-help">
            {type.touched ? type.error: ''}
          </div>
        </div>
        
        <div className={`form-group ${comment.touched && comment.invalid ? 'has-danger' : ''}`}>
          <label>Comment</label>
          <textarea className="form-control" {...comment} />
          <div className="text-help">
            {comment.touched ? comment.error: ''}
          </div>
          
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  
  if (!values.name) {
    errors.name = 'enter an item name';
  } 
  if (!values.type) {
    errors.type = 'enter an item type';
  }
  if (!values.comment) {
    errors.type = 'enter a comment';
  }
  
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['name', 'type', 'comment'],
  validate
}, null, { createPost })(PostsNew);
