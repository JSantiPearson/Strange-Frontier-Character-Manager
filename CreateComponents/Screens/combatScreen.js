import React, { Component } from 'react';
import CombatStats from '../combatstats';
import SkillCollection from '../skillCollection';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Stack = createStackNavigator();

class CombatScreen extends Component {
  render() {
     return (
       <>
         <SafeAreaView style={styles.container}>
           <ScrollView style={styles.scrollView}>
             <CombatStats
               attributes={this.props.attributes}
               species={this.props.species}
               saves={this.props.saves}
             />
            <SkillCollection
               {...this.props}
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
