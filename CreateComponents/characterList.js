import React, { Component } from 'react';
import { View, SectionList, Image, Dimensions, Button, Modal, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

class CharacterList extends Component {
  renderCharacter = character => {
    if (character.image === undefined){
      return(
        <TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            colors={['rgb(250, 0, 115)', 'rgb(0, 0, 0)']}
            style={styles.linearGradient}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require('../assets/img/profile.png')}
                style={{ width: 50, height: 50 }}
              />
              <Text style={styles.character}>{character.name}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )
    }
    else {
      return(
        <TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            colors={['rgb(250, 0, 115)', 'rgb(0, 0, 0)']}
            style={styles.linearGradient}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{ uri: character.image }}
                style={{ width: 55, height: 55 }}
              />
              <Text style={styles.character}>{character.name}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )
    }
  }
  render() {
     return (
       <>
         <View style={styles.container}>
          <SafeAreaView>
             <FlatList
                data={this.props.characters}
                renderItem={({ item: character }) => this.renderCharacter(character)}
                keyExtractor={(item) => item.id}
              />
          </SafeAreaView>
         </View>
       </>
     )
   }
 }

 export default CharacterList;

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingHorizontal: 5,
     paddingTop: 10,
     backgroundColor: "black",
   },
   linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    marginBottom: 10,
    height: Dimensions.get('window').height / 7,
    borderRadius: 5
   },
   character: {
     flex: 1,
     paddingLeft: 20,
     fontSize: 18,
     fontFamily: 'CCWildWordsRoman',
     color: "white"
   },
   buttonContainer: {
     height: Dimensions.get('window').height / 2,
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
