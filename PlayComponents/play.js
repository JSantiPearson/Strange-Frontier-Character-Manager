import React, { PureComponent } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert, View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from "react-native-material-dropdown"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PlayProfile from './screens/playProfile';

const Tab = createBottomTabNavigator();

class Play extends PureComponent {
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
                 return <MaterialCommunityIcons name={iconName} size={26} color={color} style={{ textAlignVertical: 'center' }} />;
               },
             })}
             tabBarOptions={{
               showIcon: true,
               showLabel: false,
               style: {borderTopColor: 'rgb(250, 0, 115)'},
               activeBackgroundColor: 'black',
               inactiveBackgroundColor: 'black',
               activeTintColor: 'rgb(250, 0, 115)',
               inactiveTintColor: 'rgba(250, 0, 115, 0.65)',
             }}
            >
            <Tab.Screen name="Profile">
               {props => <PlayProfile />}
           </Tab.Screen>
         </Tab.Navigator>
       </>
    )
  }
}

export default Play;

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
