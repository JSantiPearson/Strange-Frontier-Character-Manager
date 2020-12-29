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
import Equipment from './CreateComponents/Screens/equipmentScreen';
import NoteScreen from './CreateComponents/Screens/noteScreen';

import CreateScreen from './CreateComponents/Screens/createScreen';

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

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.imageButton} onPress={() => navigation.navigate('Build', { navigation })}>
            <ImageBackground source={require('./assets/img/Create.png')} resizeMode={"cover"} style={styles.backgroundImage}>
              <Text style={styles.buttonText}>Create</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.imageButton} onPress={() => navigation.navigate('Play', { navigation })}>
            <ImageBackground source={require('./assets/img/Play.png')} resizeMode={"cover"} style={styles.backgroundImage}>
              <Text style={styles.buttonText}>Play</Text>
              <Text style={[styles.buttonText, {fontSize: 20}]}>(Under Construction)</Text>
            </ImageBackground>
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

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return(
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Create"
              component={CreateScreen}
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
            <Stack.Screen
              name="Build"
              component={Builder}
              initialParams={{species: '', skills: null, skillsAvail: false, featsAvail: false, equipmentAvail: false }}
            />

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
            <Stack.Screen name="Create Move" component={CreateMove} />
          </Stack.Navigator>
        </NavigationContainer>
        <FlashMessage position="bottom" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 50,
    color: "white",
    fontFamily: 'CCWildWordsRoman',
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 10
  },
  tabTitle: {
    fontSize: 12,
    color: "white",
  },
  headerButton: {
    fontSize: 15,
    paddingHorizontal: 20,
    color: "white",
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
  imageButton: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center'
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
    justifyContent: 'center',
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
