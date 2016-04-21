import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  onSubmit(props) {
    this.props.createPost(props)
      .then(createdPost => {
        if (createdPost) {
          this.context.router.push('/');
        }
      });
  }
  
  render() {
    const { fields: { name, itemType, comment }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h4>Create A New Post</h4>

        <div className={`row ${name.touched && name.invalid ? 'has-danger': ''}`}>
          <div className="input-field col s12">
            <input id="itemname" type="text" className="validate" {...name} />
            <label for="itemname" className="active" data-error={name.touched ? name.error : ''}>Item Name</label>
            <div className="text-help">{name.touched ? name.error : ''}</div>
          </div>
        </div>        

        <div className={`row ${itemType.touched && itemType.invalid ? 'has-danger': ''}`}>
          <div className="input-field col s12">
            <input id="itemname" type="text" className="validate" {...itemType} />
            <label for="itemname" className="active" data-error={itemType.touched ? itemType.error : ''}>Item Name</label>
            <div className="text-help">{itemType.touched ? itemType.error : ''}</div>
          </div>
        </div>     
        
        <div className={`row ${comment.touched && comment.invalid ? 'has-danger' : ''}`} >
          <div className="input-field col s12">
            <textarea id="comment" className="materialize-textarea" {...comment} />
            <label for="comment" className="active">Comment</label>
            <div className="text-help">
              {comment.touched ? comment.error : ''}
            </div>
          </div>
        </div>
        
        <button type="submit" className="btn waves-effect waves-light">Submit</button>
        <Link to="/" className="btn waves-effect waves-light red">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  
  if (!values.name) {
    errors.name = 'enter an item name';
  } 
  if (!values.itemType) {
    errors.itemType = 'enter an item type';
  }
  if (!values.comment) {
    errors.comment = 'enter a comment';
  }
  
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['name', 'itemType', 'comment'],
  validate
}, null, { createPost })(PostsNew);
