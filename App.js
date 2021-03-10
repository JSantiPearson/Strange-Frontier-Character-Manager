import 'react-native-gesture-handler';

import { LogBox } from 'react-native';

import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileInputs from './CreateComponents/input.js';
import CombatStats from './CreateComponents/combatstats';
import Create from './CreateComponents/create';

import CharacterList from './CreateComponents/characterList';

import ProfileScreen from './CreateComponents/Screens/profileScreen';
import MoveScreen from './CreateComponents/Screens/moveScreenSwipes';
import CombatScreen from './CreateComponents/Screens/combatScreen';
import Equipment from './CreateComponents/Screens/equipmentScreen';
import NoteScreen from './CreateComponents/Screens/noteScreen';

import Builder from './CreateComponents/Builder/builder';
import Species from './CreateComponents/Builder/speciesScreen';
import Feats from './CreateComponents/Builder/featScreen';
import SpeciesChoice from './CreateComponents/Builder/speciesChoice';
import BuilderAttributes from './CreateComponents/Builder/builderAttributes';
import BuilderSkills from './CreateComponents/Builder/builderSkills';

import Catalogues from './CreateComponents/Screens/catalogueScreen'
import TrinitaireArms from './CreateComponents/Catalogues/TrinitaireArms';
import DodanaArmsEmporium from './CreateComponents/Catalogues/DodanaArmsEmporium';
import NarmatoArms from './CreateComponents/Catalogues/NarmatoArms';
import LeparsBlackMarket from './CreateComponents/Catalogues/LeparsBlackMarket';

import CreateMove from './CreateComponents/createmove';

import FlashMessage from 'react-native-flash-message';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  View,
  Text,
  ImageBackground,
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

function HomeScreen({ navigation, route }) {
  var { characters } = route.params;
    console.log("Home screen characters: " + characters[0].name);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Build')}>
          <Text style={styles.buttonText}>Create Character</Text>
        </TouchableOpacity>
        <CharacterList
          characters={characters}
        />
        <Text style={styles.buttonText}>Logo Placeholder</Text>
      </View>
    </>
  )
}

function CatalogueScreen({ navigation, route }) {
  return (
    <Catalogues route={route} navigation={navigation} />
  )
}

const Stack = createStackNavigator();

class App extends React.Component {
  state={
    characters: [
      {
        name: "Simon Shaw"
      }
    ]
  }
  addCharacter = character => {
    let characters = [...this.state.characters];
    character.id = character.name;
    characters.push(character);
    this.setState({ characters });
  }
  render() {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications
    return(
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              initialParams={{ characters: [...this.state.characters] }}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Create"
              component={Create}
            />
            <Stack.Screen
              name="Catalogues"
              component={CatalogueScreen}
              options={{
                headerTitle: "Catalogues",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
                headerTitleStyle: {color: "white"},
              }}
            />
            <Stack.Screen
              name="Trinitaire"
              component={TrinitaireArms}
              options={{
                headerTitle: "Trinitaire Arms",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
                headerTitleStyle: {color: "white"},
              }}
            />
            <Stack.Screen
              name="Dodana"
              component={DodanaArmsEmporium}
              options={{
                headerTitle: "Dodana Arms",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
                headerTitleStyle: {color: "white"},
              }}
            />
            <Stack.Screen
              name="Narmato"
              component={NarmatoArms}
              options={{
                headerTitle: "Narmato Arms",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
                headerTitleStyle: {color: "white"},
              }}
            />
            <Stack.Screen
              name="Lepars"
              component={LeparsBlackMarket}
              options={{
                headerTitle: "Lepar's Black Market",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
                headerTitleStyle: {color: "white"},
              }}
            />
            <Stack.Screen name="Build">
              {props => <Builder
                  {...props}
                  characterCallback={this.addCharacter}
               />}
            </Stack.Screen>
            <Stack.Screen
              name="Attributes"
              component={BuilderAttributes}
              options={{
                headerTitle: "",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
              }}
            />

            <Stack.Screen
              name="Skills"
              component={BuilderSkills}
              options={{
                headerTitle: "",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
              }}
            />

            <Stack.Screen
              name="Species"
              component={Species}
              options={{
                headerTitle: "",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
              }}
            />

            <Stack.Screen
              name="Feats"
              component={Feats}
              options={{
                headerTitle: "",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
              }}
            />

            <Stack.Screen
              name="Equipment"
              component={Equipment}
              options={{
                headerTitle: "",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
              }}
            />

            <Stack.Screen
              name="Species Choice"
              component={SpeciesChoice}
              options={{
                headerTitle: "",
                headerLeft: props => (
                  <Icon {...props} name={"chevron-left"}  size={40} color="white" />
                ),
                headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
              }}
            />
            <Stack.Screen
              name="Create Move"
              component={CreateMove}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <FlashMessage position="bottom" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 23,
    paddingVertical: Dimensions.get('window').height / 14,
    color: "white",
    fontFamily: 'CCWildWordsRoman',
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'stretch',
    flexDirection: 'column',
  },
});

export default App;
