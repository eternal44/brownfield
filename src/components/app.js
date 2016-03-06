import React from 'react';
import { Component } from 'react';
import SearchBar from './searchBar';
import Auth from './auth';
import PostList from '../containers/post-list';

export default class App extends Component {

  render() {
    return (
      <div>
        <h3>hello truu!</h3>
         <SearchBar />
         <Auth />

         <PostList />
      </div>
     
      );
  }
}