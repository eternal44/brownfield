import React from 'react';
import { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    // we need to bind this when we use this on a callback
    // if we use an arrow function we do not need to bind, but if we want a separate function we need to bind the context.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}
        className="input-group">
          <input 
          value={this.state.term}
          className="form-control"
          // putting an arrow function is the same as extracting it out as a new function.

          // onChange={event => {
          //   console.log(event.target.value);
          //   this.setState({term: event.target.value})} }/>
          onChange={this.onInputChange}/>

          <span className="input-group-btn">
            <button type="submit"
              className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      );
  }
}
