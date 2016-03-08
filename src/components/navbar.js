import React, { Component } from 'react';
import Auth from './auth';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/" className="btn btn-primary">truu</a>
          </div>
          <Auth />
        </div>
      </nav>
      );
  }
}