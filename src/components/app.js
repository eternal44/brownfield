import React from 'react';
import { Component } from 'react';
import SearchBar from './searchBar';
import Auth from './auth';

export default class App extends Component {

  render() {
    return (
      <div>
        <h3>Hello World</h3>
         <SearchBar />
         <Auth />
      </div>
     
      );
  }
}