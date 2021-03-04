import React, { Component } from 'react';
import ProfileInputs from '../input.js';

class ProfileScreen extends Component {
  sendSpecies = (species, speciesStats) => {
    this.props.speciesCallback(species, speciesStats);
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
