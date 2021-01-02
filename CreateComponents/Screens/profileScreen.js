import React, { Component } from 'react';
import ProfileInputs from '../input.js';

class ProfileScreen extends Component {
  render() {
     return (
       <ProfileInputs
         {...this.props}
       />
     )
   }
 }

 export default ProfileScreen;
