import React, { Component } from 'react';
import CombatStats from '../combatstats';
import SkillCollection from '../SkillCollection';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class CombatScreen extends Component {
  render() {
     return (
       <>
         <CombatStats
           strength={this.props.strength}
           dexterity={this.props.dexterity}
           constitution={this.props.constitution}
           wisdom={this.props.wisdom}
           intelligence={this.props.intelligence}
           influence={this.props.influence}
           species={this.props.species}
         />
       <SkillCollection
           strength={this.props.strength}
           dexterity={this.props.dexterity}
           constitution={this.props.constitution}
           wisdom={this.props.wisdom}
           intelligence={this.props.intelligence}
           influence={this.props.influence}
         />
       </>
     )
   }
 }

 export default CombatScreen;
