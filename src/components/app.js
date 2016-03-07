import React from 'react';
import { Component } from 'react';
import SearchBar from './searchBar';
import Auth from './auth';
import PostList from '../containers/post-list';
import PostDetail from '../containers/post-detail';

export default class App extends Component {

  render() {
    return (
      <div>
        <h3>truu!</h3>
         <Auth />

         <PostList />
         <PostDetail />
      </div>
     
      );
  }
}