import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, LayoutAnimation, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Accordion from 'react-native-collapsible/Accordion';

const SECTION = [
  {
    title: "Feat Name",
    content: "Description"
  }
];

function TierIndicators(props){
  console.log(props.tiers);
  return(
    <>
      {props.feat.tierOne == undefined &&
        props.tiers < 1 &&
          <View style={styles.rowItem}>
            <Icon name="circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierOne == undefined &&
        props.tiers > 0 &&
        <View style={styles.rowItem}>
          <Icon name="circle-slice-8" size={20} color="white" />
        </View>
      }
      {props.feat.tierOne != undefined &&
        props.tiers < 1 &&
          <View style={styles.rowItem}>
            <Icon name="numeric-1-circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierOne != undefined &&
        props.tiers >= 1 &&
        <View style={styles.rowItem}>
          <Icon name="numeric-1-circle" size={20} color="white" />
        </View>
      }
      {props.feat.tierTwo != undefined &&
        props.tiers < 2 &&
          <View style={styles.rowItem}>
            <Icon name="numeric-2-circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierTwo != undefined &&
        props.tiers >= 2 &&
        <View style={styles.rowItem}>
          <Icon name="numeric-2-circle" size={20} color="white" />
        </View>
      }
      {props.feat.tierThree != undefined &&
        props.tiers < 3 &&
          <View style={styles.rowItem}>
            <Icon name="numeric-3-circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierThree != undefined &&
        props.tiers >= 3 &&
        <View style={styles.rowItem}>
          <Icon name="numeric-3-circle" size={20} color="white" />
        </View>
      }
      {props.feat.tierFour != undefined &&
        props.tiers < 4 &&
          <View style={styles.rowItem}>
            <Icon name="numeric-4-circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierFour != undefined &&
        props.tiers >= 4 &&
        <View style={styles.rowItem}>
          <Icon name="numeric-4-circle" size={20} color="white" />
        </View>
      }
      {props.feat.tierFive != undefined &&
        props.tiers < 5 &&
          <View style={styles.rowItem}>
            <Icon name="numeric-5-circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierFive != undefined &&
        props.tiers >= 5 &&
        <View style={styles.rowItem}>
          <Icon name="numeric-5-circle" size={20} color="white" />
        </View>
      }
    </>
  );
}

function FeatTier(props){
  console.log(props.content);
  return (
    <>
      <View style={styles.tierRow}>
        {props.tier == props.maxPurchased+1 &&
          <TouchableOpacity activeOpacity={0.6} style={styles.rowItem} onPress={() => props.changeFeatTiers(true)}>
            <View style={styles.tierCircle}>
              <Icon name="circle-outline" size={18} color="white" />
            </View>
          </TouchableOpacity>
        }
        {props.tier <= props.maxPurchased &&
          <TouchableOpacity activeOpacity={0.6} style={styles.rowItem} onPress={() => props.changeFeatTiers(false)}>
            <View style={styles.tierCircle}>
              <Icon name="circle-slice-8" size={18} color="white" />
            </View>
          </TouchableOpacity>
        }
        {props.tier > props.maxPurchased+1 &&
          <View style={[styles.tierCircle, {paddingLeft: 7}]}>
            <Icon name="lock" size={18} color="white" />
          </View>
        }
        <Text style={styles.tier}>Tier {props.tier}</Text>
      </View>
      <Text style={[styles.text, {paddingBottom: 5}]}>{props.content}</Text>
    </>
  );
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
            <TierIndicators feat={this.props.feat} tiers={this.state.tiers} />
            <Text style={styles.title}>{this.props.feat.name}</Text>
          </View>
        </>
      );
    }
    else {
      return (
        <>
          <View style={styles.row}>
            <TierIndicators feat={this.props.feat} tiers={this.state.tiers} />
            <Text style={styles.title}>{this.props.feat.name}</Text>
          </View>
        </>
      );
    }
  }

  changeFeatTiers = increase => {
    let tiers = this.state.tiers;
    if (increase){
      tiers++;
    }
    else{
      tiers--;
    }
    this.setState({ tiers });
  }

  _renderContent = () => {
    return (
      <View style={styles.content}>
        {this.props.feat.tierOne == undefined &&
          <FeatTier tier={1} maxPurchased={this.state.tiers} content={this.props.feat.description} changeFeatTiers={this.changeFeatTiers} />
        }
        {this.props.feat.tierOne != undefined &&
          <FeatTier tier={1} maxPurchased={this.state.tiers} content={this.props.feat.tierOne} changeFeatTiers={this.changeFeatTiers} />
        }
        {this.props.feat.tierTwo != undefined &&
          <FeatTier tier={2} maxPurchased={this.state.tiers} content={this.props.feat.tierTwo} changeFeatTiers={this.changeFeatTiers} />
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
      paddingBottom: 5,
      marginBottom: 5,
      borderBottomColor: 'rgb(250, 0, 115)',
      borderBottomWidth: 1
    },
    tierRow: {
      flexDirection: "row",
      paddingBottom: 3,
      paddingLeft: 3
    },
    rowItem: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 1,
    },
    content: {
      marginBottom: 5,
      paddingBottom: 3,
      borderBottomColor: 'rgb(250, 0, 115)',
      borderBottomWidth: 1
    },
    title:{
      color: "white",
      fontSize: 20,
      textAlign: "center",
      paddingLeft: 5,
    },
    text: {
      color: "white"
    },
    tier: {
      color: "white",
      fontSize: 18
    },
    tierCircle: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 5,
    }
});
