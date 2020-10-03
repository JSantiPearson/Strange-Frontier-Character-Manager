import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from "react-native-material-dropdown"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ProfileScreen from './Screens/profileScreen';
import EquipmentScreen from './Screens/equipmentScreen';
import CombatScreen from './Screens/combatScreen';
import MoveScreen from './Screens/moveScreenSwipes';
import NoteScreen from './Screens/noteScreen';

const Tab = createMaterialTopTabNavigator();

class Create extends Component {
  state = {
    attributes: {
       strength: 10,
       dexterity: 10,
       constitution: 10,
       wisdom: 10,
       intelligence: 10,
       influence: 10
     },
     saves: {
       fortitude: 0,
       reflex: 0,
       willpower: 0
     },
     species: '',
     equipmentStats: {
       armor: 0,
       resilience: 0,
       speed: 0,
       awareness: 0,
       special: [],
     }
  }
  setAttributes = (attr) => {
    let attributes = {
      strength: attr.strength,
      dexterity: attr.dexterity,
      constitution: attr.constitution,
      wisdom: attr.wisdom,
      intelligence: attr.intelligence,
      influence: attr.influence
    };
    this.props.attributeCallback(attributes);
    this.setState({ attributes });
  }
  setSpecies = (speciesValue) => {
    this.props.speciesCallback(speciesValue);
    this.setState({ species: speciesValue });
  }
  sendStats = (stats) => {
    console.log("stats going up from create component.");
    this.props.statsCallback(stats);
  }
  setEquipmentStats = (equipmentStats) => {
    this.setState({ equipmentStats: equipmentStats });
  }
  setSaves = (saves) => {
    this.props.savesCallback(saves);
    this.setState({ saves });
  }
  render() {
     return (
       <>
         <Tab.Navigator
           swipeEnabled={false}
           screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                 let iconName;
                 if (route.name === "Profile") {
                   iconName = focused
                   ? 'account'
                   : 'account-outline';
                 }
                 else if (route.name === 'Moves') {
                   iconName = focused
                   ? 'star'
                   : 'star-outline';
                 }
                 else if (route.name === 'Combat & Skills') {
                   iconName = 'sword-cross';
                 }
                 else if (route.name === 'Equipment') {
                   iconName = 'treasure-chest';
                 }
                 else if (route.name === 'Notes') {
                   iconName = 'format-list-bulleted';
                 }
                 return <Icon name={iconName} size={26} color={color} style={{ textAlignVertical: 'center' }} />;
               },
             })}
             tabBarOptions={{
               showIcon: true,
               showLabel: false,
               activeTintColor: 'black',
               inactiveTintColor: 'gray',
             }}
          >
          <Tab.Screen name="Profile">
             {props => <ProfileScreen
                 {...props}
                 attributeCallback={this.setAttributes}
                 speciesCallback={this.setSpecies}
                 saveCallback={this.setSaves}
              />}
         </Tab.Screen>
         <Tab.Screen name="Moves">
            {props => <MoveScreen
                {...props}
                attributes={this.state.attributes}
             />}
        </Tab.Screen>
        <Tab.Screen name="Combat & Skills">
           {props => <CombatScreen
               attributes={this.state.attributes}
               species={this.state.species}
               equipmentStats={this.state.equipmentStats}
               saves={this.state.saves}
               statsCallback={this.sendStats}
            />}
       </Tab.Screen>
       <Tab.Screen name="Equipment">
          {props => <EquipmentScreen
              {...props}
              attributes={this.state.attributes}
              statsCallback={this.setEquipmentStats}
           />}
      </Tab.Screen>
      <Tab.Screen name="Notes">
         {props => <NoteScreen
             {...props}
             attributes={this.state.attributes}
          />}
     </Tab.Screen>
         </Tab.Navigator>
       </>
    )
  }
}

export default Create;

const styles = StyleSheet.create({
  tabTitle: {
    fontSize: 12
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
