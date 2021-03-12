import React, { Component } from 'react';
import ProfileInputs from '../input.js';

class ProfileScreen extends Component {
  sendSpecies = (species) => {
    this.props.speciesCallback(species);
  }
  sendSpeciesStats = (speciesStats) => {
    this.props.speciesStatsCallback(speciesStats);
  }
  sendName = (name) => {
    this.props.nameCallback(name);
  }
  sendImage = (image) => {
    this.props.imageCallback(image);
  }
  render() {
     return (
       <ProfileInputs
         {...this.props}
         speciesCallback={this.sendSpecies}
         speciesStatsCallback={this.sendSpeciesStats}
         nameCallback={this.sendName}
         imageCallback={this.sendImage}
       />
     )
   }
 }

 export default ProfileScreen;
