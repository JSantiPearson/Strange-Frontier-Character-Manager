import React, { Component } from 'react';
import ProfileInputs from '../input.js';

class ProfileScreen extends Component {
  render() {
    console.log("Prof screen nav: " + this.props.navigation);
     return (
       <ProfileInputs
         {...this.props}
       />
     )
   }
 }

 export default ProfileScreen;
