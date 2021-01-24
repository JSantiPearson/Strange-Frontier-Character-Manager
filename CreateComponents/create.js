import React, { PureComponent } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from "react-native-material-dropdown"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ProfileScreen from './Screens/profileScreen';
import Equipment from './Screens/equipmentScreen';
import CombatScreen from './Screens/combatScreen';
import MoveScreen from './Screens/moveScreenSwipes';
import NoteScreen from './Screens/noteScreen';

const Tab = createBottomTabNavigator();

class Create extends PureComponent {
  state = {
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
  componentDidMount(){
    this.props.navigation.setOptions({
      headerTitle: "New Character",
      headerTitleAlign: "center",
      headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
      headerLeft: props => (
          /* TODO: Add a confirmation alert since progress will be lost if the user presses this button. */
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home', {})}
            title="Cancel"
            color='rgb(250, 0, 115)'
          >
            <Text style={styles.headerButton}>Cancel</Text>
          </TouchableOpacity>
      ),
      headerTitleStyle: {color: "white"}
    });
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
    this.setState({ attributes });
  }
  setSpecies = (speciesValue) => {
    this.props.route.params.navigation.setParams({ species: speciesValue });
    this.setState({ species: speciesValue });
  }
  setEquipmentStats = (equipmentStats) => {
    this.setState({ equipmentStats });
  }
  setSaves = (saves) => {
    this.setState({ saves });
    this.props.route.params.navigation.setParams({ saves });
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
               activeBackgroundColor: 'black',
               inactiveBackgroundColor: 'black',
               activeTintColor: 'rgb(250, 0, 115)',
               inactiveTintColor: 'rgba(250, 0, 115, 0.65)',
             }}
          >
          <Tab.Screen name="Profile">
             {props => <ProfileScreen
                 navigation={this.props.route.params.navigation}
                 route={this.props.route}
                 species={this.props.route.params.species}
                 attributes={this.props.route.params.attributes}
                 saves={this.props.route.params.saves}
              />}
         </Tab.Screen>
         <Tab.Screen name="Moves">
            {props => <MoveScreen
                {...props}
                attributes={this.props.route.params.attributes}
             />}
        </Tab.Screen>
        <Tab.Screen name="Combat & Skills">
           {props => <CombatScreen
               navigation={this.props.route.params.navigation}
               attributes={this.props.route.params.attributes}
               species={this.props.route.params.species}
               saves={this.props.route.params.saves}
               equipmentStats={this.state.equipmentStats}
            />}
       </Tab.Screen>
       <Tab.Screen name="Equipment">
          {props => <Equipment
              {...props}
              attributes={this.props.route.params.attributes}
              equipmentStatsCallback={this.setEquipmentStats}
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
  headerButton: {
    fontSize: 15,
    paddingHorizontal: 20,
    color: "white",
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
