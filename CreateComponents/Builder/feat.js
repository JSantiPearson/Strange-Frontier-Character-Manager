import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, LayoutAnimation, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from "react-native-vector-icons/MaterialIcons";
import Accordion from 'react-native-collapsible/Accordion';

const SECTION = [
  {
    title: "Feat Name",
    content: "Description"
  }
];

function FeatTier(props){
  render(){
    return (
      <>
        <View style={styles.row}>
          {props.tier <= props.maxPurchased &&
            <Icon name="circle-outline" size={18} color='rgb(250, 0, 115)' />
          }
          {props.tier == props.maxPurchased+1 &&
            <Icon name="circle-slice-8" size={18} color='rgb(250, 0, 115)' />
          }
          {props.tier > props.maxPurchased+1 &&
            <Icon name="lock" size={18} color='rgb(250, 0, 115)' />
          }
          <Text style={styles.tier}>Tier {props.tier}</Text>
        </View>
        <Text style={styles.text}>{props.content}</Text>
      </>
    );
  }
}

class Feat extends Component {
  state = {
    active: [],
    tiers: 0,
  }

  _renderHeader = () => {
    if (this.state.active[0] == 0){
      return (
        <>
          <View style={styles.row}>
            {this.props.feat.tierOne == undefined &&
              <Icon name="circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            {this.props.feat.tierOne != undefined &&
              <Icon name="numeric-1-circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            {this.props.feat.tierTwo!= undefined &&
              <Icon name="numeric-2-circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            {this.props.feat.tierThree != undefined &&
              <Icon name="numeric-3-circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            {this.props.feat.tierFour != undefined &&
              <Icon name="numeric-4-circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            {this.props.feat.tierFive != undefined &&
              <Icon name="numeric-5-circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            <Text style={styles.activeTitle}>{this.props.feat.name}</Text>
          </View>
        </>
      );
    }
    else {
      return (
        <>
          <View style={styles.row}>
            {this.props.feat.tierOne == undefined &&
              <Icon name="circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            {this.props.feat.tierOne != undefined &&
              <Icon name="numeric-1-circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            {this.props.feat.tierTwo!= undefined &&
              <Icon name="numeric-2-circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            {this.props.feat.tierThree != undefined &&
              <Icon name="numeric-3-circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            {this.props.feat.tierFour != undefined &&
              <Icon name="numeric-4-circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            {this.props.feat.tierFive != undefined &&
              <Icon name="numeric-5-circle-outline" size={18} color='rgb(250, 0, 115)' />
            }
            <Text style={styles.inactiveTitle}>{this.props.feat.name}</Text>
          </View>
        </>
      );
    }
  }

  addItem = () => {
    let item = this;
    this.props.itemCallback(item);
  }

  _renderContent = () => {
    return (
      <View style={styles.child}>
        {this.props.feat.tierOne == undefined &&
          <FeatTier tier={1} maxPurchased={this.state.tiers} content={this.props.description} />
        }
      </View>
    );
  };

  _updateSections = active => {
    console.log(active);
    this.setState({ active });
  };

  render() {
    return (
      <Accordion
        sections={SECTION}
        activeSections={this.state.active}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        underlayColor={Colors.LIGHTGRAY}
      />
    )
  }
}

export default Feat;

const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    tierRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    inactiveTitle:{
      color: "white",
      fontSize: 16,
      paddingTop: 10,
      borderBottomColor: 'rgb(250, 0, 115)',
      borderBottomWidth: 1
    },
    activeTitle:{
      color: "white",
      fontSize: 16,
      paddingTop: 10,
    },
    child: {
      borderBottomColor: 'rgb(250, 0, 115)',
      borderBottomWidth: 1
    },
    text: {
      color: "white"
    },
    text: {
      color: 'rgb(250, 0, 115)',
      fontSize: 14
    },
    purchaseButton:{
      borderWidth: 5,
      color: 'rgb(250, 0, 115)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 80,
      height: 80,
      backgroundColor: '#fff',
      borderRadius: 50,
      alignSelf: 'flex-end',
    },
});
