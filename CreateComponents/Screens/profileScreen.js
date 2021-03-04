import React, { Component } from 'react';
import ProfileInputs from '../input.js';

class ProfileScreen extends Component {
  sendSpecies = (species) => {
    this.props.speciesCallback(species);
  }
  render() {
     return (
       <ProfileInputs
         {...this.props}
         speciesCallback={this.sendSpecies}
       />
     )
   }
 }

 export default ProfileScreen;
