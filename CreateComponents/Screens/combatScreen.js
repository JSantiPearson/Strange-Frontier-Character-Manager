import React, { Component } from 'react';
import CombatStats from '../combatstats';
import SkillCollection from '../SkillCollection';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Stack = createStackNavigator();

class CombatScreen extends Component {
  sendStats = (stats) => {
    console.log("Current armor in combat screen: " + stats.armor);
    this.props.statsCallback(stats);
  }
  render() {
     return (
       <>
         <SafeAreaView style={styles.container}>
           <ScrollView style={styles.scrollView}>
             <CombatStats
               attributes={this.props.attributes}
               species={this.props.species}
               equipmentStats={this.props.equipmentStats}
               saves={this.props.saves}
               statsCallback={this.sendStats}
             />
            <SkillCollection
               attributes={this.props.attributes}
            />
           </ScrollView>
         </SafeAreaView>
       </>
     )
   }
 }

 export default CombatScreen;

 const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 20
    },
    scrollView: {
      marginHorizontal: 5
    },
    row: {
      justifyContent: 'space-evenly',
      flexDirection: "row"
    },
    inputWrap: {
     flex: 1,
     borderColor: "#cccccc",
     borderBottomWidth: 1,
     marginBottom: 10,
     paddingHorizontal: 10
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    },
    TextInputStyle: {
     textAlign: 'left',
     height: 40,
     borderRadius: 10,
     borderWidth: 2,
     borderColor: '#009688',
     marginBottom: 10
   }
 })
