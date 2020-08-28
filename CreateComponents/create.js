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
import MoveScreen from './Screens/moveScreen';
import NoteScreen from './Screens/noteScreen';

const Tab = createMaterialTopTabNavigator();

class Create extends Component {
  state = {
     strength: 10,
     dexterity: 10,
     constitution: 10,
     wisdom: 10,
     intelligence: 10,
     influence: 10,
     species: '',
     equipmentStats: {
       armor: 0,
       resilience: 0,
       speed: 0,
       awareness: 0,
       special: [],
     }
  }
  setStrength = (strengthValue) => {
    this.setState({ strength: strengthValue });
  }
  setDexterity = (dexterityValue) => {
    this.setState({ dexterity: dexterityValue });
  }
  setConstitution = (conValue) => {
    this.setState({ constitution: conValue });
  }
  setWisdom = (wisValue) => {
    this.setState({ wisdom: wisValue });
  }
  setIntelligence = (intValue) => {
    this.setState({ intelligence: intValue });
  }
  setInfluence = (chaValue) => {
    this.setState({ influence: chaValue });
  }
  setSpecies = (speciesValue) => {
    this.setState({ species: speciesValue });
  }
  setEquipmentStats = (equipmentStats) => {
    this.setState({ equipmentStats });
  }
  render() {
     return (
       <>
         <Tab.Navigator
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

                 // You can return any component that you like here!
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
                 strCallback={this.setStrength}
                 dexCallback={this.setDexterity}
                 conCallback={this.setConstitution}
                 wisCallback={this.setWisdom}
                 intCallback={this.setIntelligence}
                 infCallback={this.setInfluence}
                 speciesCallback={this.setSpecies}
              />}
         </Tab.Screen>
         <Tab.Screen name="Moves">
            {props => <MoveScreen
                {...props}
                strength={this.state.strength}
                dexterity={this.state.dexterity}
                constitution={this.state.constitution}
                wisdom={this.state.wisdom}
                intelligence={this.state.intelligence}
                influence={this.state.influence}
             />}
        </Tab.Screen>
        <Tab.Screen name="Combat & Skills">
           {props => <CombatScreen
               {...props}
               strength={this.state.strength}
               dexterity={this.state.dexterity}
               constitution={this.state.constitution}
               wisdom={this.state.wisdom}
               intelligence={this.state.intelligence}
               influence={this.state.influence}
               species={this.state.species}
               equipmentStats={this.state.equipmentStats}
            />}
       </Tab.Screen>
       <Tab.Screen name="Equipment">
          {props => <EquipmentScreen
              {...props}
              strength={this.state.strength}
              dexterity={this.state.dexterity}
              constitution={this.state.constitution}
              wisdom={this.state.wisdom}
              intelligence={this.state.intelligence}
              influence={this.state.influence}
              statCallback={this.setEquipmentStats}
           />}
      </Tab.Screen>
      <Tab.Screen name="Notes">
         {props => <NoteScreen
             {...props}
             strength={this.state.strength}
             dexterity={this.state.dexterity}
             constitution={this.state.constitution}
             wisdom={this.state.wisdom}
             intelligence={this.state.intelligence}
             influence={this.state.influence}
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
