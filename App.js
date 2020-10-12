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

import CreateScreen from './CreateComponents/Screens/createScreen';

import Builder from './CreateComponents/builder';
import Species from './CreateComponents/Screens/speciesScreen';

import Catalogues from './CreateComponents/Screens/catalogueScreen'
import TrinitaireArms from './CreateComponents/Catalogues/TrinitaireArms';
import DodanaArmsEmporium from './CreateComponents/Catalogues/DodanaArmsEmporium';
import NarmatoArms from './CreateComponents/Catalogues/NarmatoArms';
import LeparsBlackMarket from './CreateComponents/Catalogues/LeparsBlackMarket';

import CreateMove from './CreateComponents/createmove';


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
          <TouchableOpacity onPress={() => navigation.navigate('Build', { navigation })}>
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

const BuilderStack = createStackNavigator();

function BuildScreen({ navigation, route }) {
  return(
    <BuilderStack.Navigator>
      <Stack.Screen name="Character Builder" component={Builder} />
      <Stack.Screen name="Species" component={Species} />
    </BuilderStack.Navigator>
  )
}

const Stack = createStackNavigator();

class App extends React.Component {
  state = {
    attributes: {
       strength: 10,
       dexterity: 10,
       constitution: 10,
       wisdom: 10,
       intelligence: 10,
       influence: 10
     },
     species: '',
     stats: {
       armor: 0,
       resilience: 0,
       speed: 0,
       awareness: 0
     },
     saves: {
       fortitude: 0,
       reflex: 0,
       willpower: 0
     }
  }
  setAttributes = (attributes) => {
    console.log("Current strength: " + attributes.strength);
    this.setState({ attributes });
  }
  setSpecies = (species) => {
    console.log("Current species: " + species);
    this.setState({ species });
  }
  setStats = (stats) => {
    console.log("Current armor in App.js: " + stats.armor);
    this.setState({ stats });
  }
  setSaves = (saves) => {
    console.log("Current fortitude: " + saves.fortitude);
    this.setState({ saves });
  }
  render() {
    return(
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Create">
              {props => <CreateScreen
                attributeCallback={this.setAttributes}
                speciesCallback={this.setSpecies}
                statsCallback={this.setStats}
                savesCallback={this.setSaves}
              />}
            </Stack.Screen>
            <Stack.Screen name="Build" component={BuildScreen} options={{ headerShown: false }} />

            <Stack.Screen name="Catalogues" component={CatalogueScreen} />
            <Stack.Screen name="Trinitaire" component={TrinitaireArms} />
            <Stack.Screen name="Dodana" component={DodanaArmsEmporium} />
            <Stack.Screen name="Narmato" component={NarmatoArms} />
            <Stack.Screen name="Lepars" component={LeparsBlackMarket} />

            <Stack.Screen name="Create Move" component={CreateMove} />
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
