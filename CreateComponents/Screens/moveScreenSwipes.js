import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Swipeable from 'react-native-swipeable-row';

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
  };

  handleScroll = () => {
    const {currentlyOpenSwipeable} = this.state;

    if (currentlyOpenSwipeable) {
      currentlyOpenSwipeable.recenter();
    }
  };

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
        <MoveItem onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.move1} color={'hotpink'}/>
        <MoveItem onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.move2} color={'salmon'}/>
        <MoveItem onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.move3} color={'hotpink'}/>
        <MoveItem onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.move4} color={'salmon'}/>
        <MoveItem onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.move5} color={'hotpink'}/>
        <MoveItem onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.shift} color={'salmon'}/>
        <MoveItem onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.exotic1} color={'hotpink'}/>
        <MoveItem onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.exotic2} color={'salmon'}/>
        <MoveItem onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.exotic3} color={'hotpink'}/>
        <MoveItem onOpen={itemProps.onOpen} onClose={itemProps.onClose} move={this.state.flash} color={'salmon'}/>
      </ScrollView>
    );
  }
}

function MoveItem(props) {
  //TODO: Bring over all needed props to this function in a tidy way.
  return (
    <Swipeable
      leftContent={(
        <View style={[styles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
          <Text>Pull action</Text>
        </View>
      )}
      rightButtons={[
        <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
          <Text>1</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orchid'}]}>
          <Text>2</Text>
        </TouchableOpacity>
      ]}
      onRightButtonsOpenRelease={props.onOpen}
      onRightButtonsCloseRelease={props.onClose}
    >
      <View style={[styles.listItem, {backgroundColor: props.color}]}>
        <Text>{props.move.name}</Text>
      </View>
    </Swipeable>
  );
}

export default MoveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  listItem: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
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
