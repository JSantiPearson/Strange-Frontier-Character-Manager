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
import TrinitaireArms from './CreateComponents/Catalogues/TrinitaireArms';
import DodanaArmsEmporium from './CreateComponents/Catalogues/DodanaArmsEmporium';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
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
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Create', { navigation })}>
            <Image source={require('./assets/img/CreateScreen.png')} style={styles.backgroundImage} resizeMode='cover' />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Play', { navigation })}>
              <Image source={require('./assets/img/poker.jpg')} style={styles.backgroundImage} resizeMode='cover' />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

function CatalogueScreen({ navigation, route }) {
  return (
    <Catalogues route={route} navigation={navigation} />
  )
}

function CreateScreen({ navigation }) {
  return (
      <Create navigation={navigation} />
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
            <Stack.Screen name="Trinitaire" component={TrinitaireArms} />
            <Stack.Screen name="Dodana" component={DodanaArmsEmporium} />
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
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'stretch',
    flexDirection: 'column',
  },
  buttonContainer: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
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
  }
});

export default App;
