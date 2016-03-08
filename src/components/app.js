import React from 'react';
import { Component } from 'react';
import SearchBar from './searchBar';
import Auth from './auth';
import PostList from '../containers/post-list';
import PostDetail from '../containers/post-detail';
import NavBar from './navbar';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <h3>truu!</h3>
         <SearchBar />
         <PostList />
         <PostDetail />
      </div>
     
      );
  }
}