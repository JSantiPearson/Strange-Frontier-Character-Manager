import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Swipeable from 'react-native-swipeable';

class MoveScreen extends Component {

  state = {
    currentlyOpenSwipeable: null,
    move1: {
      name: "EMPTY",
			description: "",
      id: "move1",
      cost: 1
    },
    move2: {
      name: "EMPTY",
			description: "",
      id: "move2",
      cost: 1
    },
    move3: {
      name: "EMPTY",
			description: "",
      id: "move3",
      cost: 1
    },
    move4: {
      name: "EMPTY",
			description: "",
      id: "move4",
      cost: 1
    },
    move5: {
      name: "EMPTY",
			description: "",
      id: "move5",
      cost: 1
    },
    shift: {
      name: "EMPTY",
			description: "",
      id: "shift",
      cost: 1
    },
    exotic1: {
      name: "EMPTY",
			description: "",
      id: "exotic1",
      cost: 1
    },
    exotic2: {
      name: "EMPTY",
			description: "",
      id: "exotic2",
      cost: 1
    },
    exotic3: {
      name: "EMPTY",
			description: "",
      id: "exotic3",
      cost: 1
    },
    flash: {
      name: "EMPTY",
			description: "",
      id: "flash",
      cost: 1
    }
  };

  handleScroll = () => {
    const {currentlyOpenSwipeable} = this.state;

    if (currentlyOpenSwipeable) {
      currentlyOpenSwipeable.recenter();
    }
  };

  handleMove = (move) => {
    this.setState({[move.id]: move});
  }

  render() {
    const {currentlyOpenSwipeable} = this.state;
    const itemProps = {
      onOpen: (event, gestureState, swipeable) => {
        if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
          currentlyOpenSwipeable.recenter();
        }

        this.setState({currentlyOpenSwipeable: swipeable});
      },
      onClose: () => this.setState({currentlyOpenSwipeable: null})
    };
    return (
      <ScrollView onScroll={this.handleScroll} style={styles.container}>
        <Text style={styles.subtitle}>Moves</Text>
        <MoveItem handleMove={this.handleMove} navigation={this.props.navigation} onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.move1}/>
        <MoveItem handleMove={this.handleMove} navigation={this.props.navigation} onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.move2}/>
        <MoveItem handleMove={this.handleMove} navigation={this.props.navigation} onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.move3}/>
        <MoveItem handleMove={this.handleMove} navigation={this.props.navigation} onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.move4}/>
        <MoveItem handleMove={this.handleMove} navigation={this.props.navigation} onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.move5}/>
        <Text style={styles.subtitle}>Shift</Text>
        <MoveItem handleMove={this.handleMove} navigation={this.props.navigation} onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.shift}/>
        <Text style={styles.subtitle}>Exotic Moves</Text>
        <MoveItem handleMove={this.handleMove} navigation={this.props.navigation} onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.exotic1}/>
        <MoveItem handleMove={this.handleMove} navigation={this.props.navigation} onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.exotic2}/>
        <MoveItem handleMove={this.handleMove} navigation={this.props.navigation} onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.exotic3}/>
        <Text style={styles.subtitle}>Flash</Text>
        <MoveItem handleMove={this.handleMove} navigation={this.props.navigation} onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.flash}/>
      </ScrollView>
    );
  }
}

function MoveItem(props) {
  //TODO: Bring over all needed props to this function in a tidy way.
  console.log("Passing move cost: " + props.move.cost);
  return (
    <Swipeable
      rightButtons={[
        <TouchableOpacity onPress={() => props.navigation.navigate('Create Move', { moveCallback: props.handleMove, move: props.move})} style={[styles.rightSwipeItem, {color: 'white', backgroundColor: 'rgb(250, 0, 115)'}]}>
          <Text style={{color: "white"}}>Info</Text>
        </TouchableOpacity>,
      ]}
      onRightButtonsOpenRelease={props.onOpen}
      onRightButtonsCloseRelease={props.onClose}
    >
    <TouchableOpacity onPress={() => props.navigation.navigate('Create Move', { moveCallback: props.handleMove, move: props.move})}>
      <View style={styles.listItem}>
        <Text style={styles.name}>{props.move.name}</Text>
        <Text style={styles.cost}>{props.move.cost}</Text>
      </View>
    </TouchableOpacity>
    </Swipeable>
  );
}

export default MoveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'black'
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 10
  },
  name: {
    color: "white"
  },
  cost: {
    color: "white",
    fontSize: 12,
    fontStyle: "italic"
  },
  listItem: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(250, 0, 115)',
    borderTopColor: 'rgb(250, 0, 115)',
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

});
