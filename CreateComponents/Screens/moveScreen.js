import React, { Component } from 'react';
import { View, Dimensions, ImageBackground, Button, Text, Picker, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class MoveScreen extends Component {
  state = {
    currentlyOpenSwipeable: null,
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

  handleScroll = () => {
    const {currentlyOpenSwipeable} = this.state;

    if (currentlyOpenSwipeable){
      currentlyOpenSwipeable.recenter();
    }
  }

  handleMove = (move) => {
    this.setState({[move.id]: move});
  }

  _renderMove = (move) => {

    const rightButtons =
    [
      <View style={styles.rightSwipeItem}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Create Move', { moveCallback: this.handleMove, move: move})}>
          <Icon name='pencil' size={26} color={Colors.white} style={{ textAlignVertical: 'center' }} />
        </TouchableHighlight>
      </View>,
      <View style={styles.rightSwipeItem}>
        <TouchableHighlight>
          <Icon name='trash-can-outline' size={26} color={Colors.white} style={{ textAlignVertical: 'center' }} />
        </TouchableHighlight>
      </View>
    ];

    const leftContent =
    <View style={styles.leftSwipeItem}>
      <Text style={styles.text} color={Colors.white}>Pull</Text>
    </View>;

    return (
      <View style={styles.listItem}>
        <Swipeable leftContent={leftContent} rightButtons={rightButtons} rightActivationDistance={100}>
          <Text style={styles.moveText}>{move.name}</Text>
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
     flex: 1,
   },
   listItem: {
     height: 75,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: Colors.black,
   },
   leftSwipeItem: {
     flex: 1,
     alignItems: 'flex-end',
     justifyContent: 'center',
     paddingRight: 20
   },
   rightSwipeItem: {
     flex: 1,
     justifyContent: 'center',
     paddingLeft: 20
   },
   text: {
     fontFamily: 'CCWildWordsRoman',
     fontSize: 24,
     textAlign: 'center',
     alignItems: 'center',
     justifyContent: 'center',
     color: Colors.white,
   },
   moveText: {
     fontFamily: 'CCWildWordsRoman',
     fontSize: 24,
     textAlign: 'center',
     marginTop: 30, //TODO: This hard coded margin to align the move text with the swipeable might come back to haunt me with different screen sizes. Temp fix.
     color: Colors.white,
   },
 });
