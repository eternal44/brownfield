import React from 'react';
import { Component } from 'react';
import Firebase from 'firebase';

export default class Auth extends Component {
  render() {
    return (
      <div>
        <button
        onClick={this.onButtonClick}>Login With Facebook
        </button>
      </div>
      );
  }

  onButtonClick() {
    const firebaseRef = new Firebase('https://brown-field.firebaseio.com');
    firebaseRef.authWithOAuthPopup('facebook', (error, authData) => {
      if (error) {
        console.error('Login Failed');
      } else {
        console.log('Login Success: ', authData);
      }
    });
  }

}