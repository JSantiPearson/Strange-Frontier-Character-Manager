import React, { Component } from 'react';
import ProfileInputs from '../input.js';

class ProfileScreen extends Component {
  state = {
     strength: 10,
     dexterity: 10,
     constitution: 10,
     wisdom: 10,
     intelligence: 10,
     influence: 10,
     species: "human"
  }
  setSpecies = (speciesValue) => {
   this.setState({ species: speciesValue });
   this.props.speciesCallback(speciesValue);
  }
  setStrength = (strValue) => {
    this.setState({ strength: strValue });
    this.props.strCallback(strValue);
  }
  setDexterity = (dexValue) => {
    this.setState({ dexterity: dexValue });
    this.props.dexCallback(dexValue);
  }
  setConstitution = (conValue) => {
    this.setState({ constitution: conValue });
    this.props.conCallback(conValue);
  }
  setWisdom = (wisValue) => {
    this.setState({ wisdom: wisValue });
    this.props.wisCallback(wisValue);
  }
  setIntelligence = (intValue) => {
    this.setState({ intelligence: intValue })
    this.props.intCallback(intValue);
  }
  setInfluence = (infValue) => {
    this.setState({ influence: infValue })
    this.props.infCallback(infValue);
  }
  render() {
     return (
       <ProfileInputs
         speciesCallback={this.setSpecies}
         strCallback={this.setStrength}
         dexCallback={this.setDexterity}
         conCallback={this.setConstitution}
         wisCallback={this.setWisdom}
         intCallback={this.setIntelligence}
         infCallback={this.setInfluence}
       />
     )
   }
 }

 export default ProfileScreen;
