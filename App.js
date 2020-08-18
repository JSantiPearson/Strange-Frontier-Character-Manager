/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileInputs from './CreateComponents/input.js';
import CombatStats from './CreateComponents/combatstats';
import Create from './CreateComponents/create';
import ProfileScreen from './CreateComponents/Screens/profileScreen';
import MoveScreen from './CreateComponents/Screens/moveScreen';
import CombatScreen from './CreateComponents/Screens/combatScreen';
import EquipmentScreen from './CreateComponents/Screens/equipmentScreen';
import NoteScreen from './CreateComponents/Screens/noteScreen';
import Catalogues from './CreateComponents/Screens/catalogueScreen'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Button
        title="Create Character"
        onPress={() => navigation.navigate('Create', { navigation })}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Button
        title="Play Character"
        />
      </View>
    </>
  )
}

function CatalogueScreen({ navigation }) {
  return (
    <Catalogues />
  )
}

function CreateScreen() {
  return (
      <Create />
  );
}

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return(
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Create" component={CreateScreen} />
            <Stack.Screen name="Catalogues" component={CatalogueScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

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

export default App;
