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
  render() {
     return (
       <ProfileInputs
         {...this.props}
         speciesCallback={this.sendSpecies}
         speciesStatsCallback={this.sendSpeciesStats}
       />
     )
   }
 }

 export default ProfileScreen;
