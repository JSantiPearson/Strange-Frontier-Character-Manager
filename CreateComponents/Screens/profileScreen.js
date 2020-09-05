import React, { Component } from 'react';
import ProfileInputs from '../input.js';

class ProfileScreen extends Component {
  setSpecies = (speciesValue) => {
   this.props.speciesCallback(speciesValue);
  }
  setAttributes = (attr) => {
    let attributes = {
      strength: attr.strength,
      dexterity: attr.dexterity,
      constitution: attr.constitution,
      wisdom: attr.wisdom,
      intelligence: attr.intelligence,
      influence: attr.influence
    }
    this.props.attributeCallback(attributes);
  }
  setSaves = (saves) => {
    this.props.saveCallback(saves);
  }
  render() {
     return (
       <ProfileInputs
         speciesCallback={this.setSpecies}
         attributeCallback={this.setAttributes}
         saveCallback={this.setSaves}
       />
     )
   }
 }

 export default ProfileScreen;
