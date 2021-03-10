import React, { Component } from 'react';
import { View, SectionList, ImageBackground, Dimensions, Button, Modal, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class CharacterList extends Component {
  renderCharacter = character => {
    return(
      <ImageBackground
        style={styles.buttonContainer}
        source={require('../assets/img/Play.png')}
      >
        <TouchableOpacity style={styles.option}>
          <Text style={styles.character}>{character.name}</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
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
   imageContainer: {
     flex: 1,
   },
   option: {
     paddingHorizontal: 10,
     paddingVertical: 5,
     marginBottom: 2,
   },
   character: {
     flex: 1,
     fontSize: 16,
     paddingTop: 5,
   },
   buttonContainer: {
     height: Dimensions.get('window').height / 2,
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
