import React, { Component } from 'react';
import { View, Dimensions, ImageBackground, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

class MoveScreen extends Component {
  state = {
    move1: {
      name: "EMPTY",
      id: "move1",
      cost: 0
    },
    move2: {
      name: "EMPTY",
      id: "move2",
      cost: 0
    },
    move3: {
      name: "EMPTY",
      id: "move3",
      cost: 0
    },
    move4: {
      name: "EMPTY",
      id: "move4",
      cost: 0
    },
    move5: {
      name: "EMPTY",
      id: "move5",
      cost: 0
    },
    shift: {
      name: "EMPTY",
      id: "shift",
      cost: 0
    },
    exotic1: {
      name: "EMPTY",
      id: "exotic1",
      cost: 0
    },
    exotic2: {
      name: "EMPTY",
      id: "exotic2",
      cost: 0
    },
    exotic3: {
      name: "EMPTY",
      id: "exotic3",
      cost: 0
    },
    flash: {
      name: "EMPTY",
      id: "flash",
      cost: 0
    }
  }

  handleMove = (move) => {
    console.log("Handling " + move.name);
    this.setState({[move.id]: move});
    console.log(move.id)
  }

  _renderMove = (move) => {
    return (
      <View style={styles.move}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Create Move', { moveCallback: this.handleMove, move: move})}>
          <ImageBackground style={styles.image} source={require('../../assets/img/blue.png')}>
            <Text style={styles.text}>{move.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
     return (
       <>
       <SafeAreaView>
         <ScrollView>
           <View style={styles.container}>
            {this._renderMove(this.state.move1)}
            {this._renderMove(this.state.move2)}
            {this._renderMove(this.state.move3)}
            {this._renderMove(this.state.move4)}
            {this._renderMove(this.state.move5)}
            {this._renderMove(this.state.shift)}
            {this._renderMove(this.state.exotic1)}
            {this._renderMove(this.state.exotic2)}
            {this._renderMove(this.state.exotic3)}
            {this._renderMove(this.state.flash)}
           </View>
          </ScrollView>
        </SafeAreaView>
       </>
     )
   }
 }

 export default MoveScreen;

 const styles = StyleSheet.create({
   container: {
     flexDirection: 'column',
     flex: 1
   },
   move: {
     flex: 1,
     justifyContent: 'center',
     alignContent: 'stretch',
     alignItems: 'center',
   },
   image: {
     borderWidth: 1,
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height / 5,
   },
   text: {
     fontFamily: 'CCWildWordsRoman',
     fontSize: 24,
     color: Colors.white,
   }
 });
