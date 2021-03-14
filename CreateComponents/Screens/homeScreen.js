import React, { Component } from 'react';
import CharacterList from '../characterList';
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

class HomeScreen extends Component {
  render() {
     return (
       <>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Build')}>
            <Text style={styles.buttonText}>Create Character</Text>
          </TouchableOpacity>
          <CharacterList
            characters={this.props.characters}
          />
          <Text style={styles.buttonText}>Logo Placeholder</Text>
        </View>
      </>
     )
   }
 }

 export default HomeScreen;

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
