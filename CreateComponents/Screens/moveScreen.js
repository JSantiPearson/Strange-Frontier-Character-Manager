import React, { Component } from 'react';
import { View, Dimensions, ImageBackground, Button, Text, Picker, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const leftContent = <Icon name='star' size={26} color={Colors.white} style={{ textAlignVertical: 'center' }} />;

class MoveScreen extends Component {
  state = {
    move1: {
      name: "EMPTY",
			description: "",
      id: "move1",
      cost: null
    },
    move2: {
      name: "EMPTY",
			description: "",
      id: "move2",
      cost: null
    },
    move3: {
      name: "EMPTY",
			description: "",
      id: "move3",
      cost: null
    },
    move4: {
      name: "EMPTY",
			description: "",
      id: "move4",
      cost: null
    },
    move5: {
      name: "EMPTY",
			description: "",
      id: "move5",
      cost: null
    },
    shift: {
      name: "EMPTY",
			description: "",
      id: "shift",
      cost: null
    },
    exotic1: {
      name: "EMPTY",
			description: "",
      id: "exotic1",
      cost: null
    },
    exotic2: {
      name: "EMPTY",
			description: "",
      id: "exotic2",
      cost: null
    },
    exotic3: {
      name: "EMPTY",
			description: "",
      id: "exotic3",
      cost: null
    },
    flash: {
      name: "EMPTY",
			description: "",
      id: "flash",
      cost: null
    }
  }

  handleMove = (move) => {
    this.setState({[move.id]: move});
  }

  _renderMove = (move) => {
    let rightButtons = [
      <TouchableHighlight onPress={() => this.props.navigation.navigate('Create Move', { moveCallback: this.handleMove, move: move})}>
        <Icon name='pencil' size={26} color={Colors.white} style={{ textAlignVertical: 'center' }} />
      </TouchableHighlight>,
      <TouchableHighlight>
        <Icon name='trash-can-outline' size={26} color={Colors.white} style={{ textAlignVertical: 'center' }} />
      </TouchableHighlight>
    ];
    return (
      <View style={styles.move}>
        <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
          <Text style={styles.text}>{move.name}</Text>
          <Text style={styles.text}>
            <Text>{move.cost}</Text>
            {move.cost != null &&
              <Text>*</Text>
            }
          </Text>
        </Swipeable>
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
     backgroundColor: Colors.black,
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
     margin: 15,
     textAlign: 'center',
   }
 });
