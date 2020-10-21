import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function BaseCombatStats(props){

}

class SpeciesChoice extends Component {
  render() {
     return (
       <>
         <View style={styles.container}>
           <Text style={styles.title}>{this.props.species} Species Traits</Text>
           <View style={styles.column}>
             <View style={styles.item}>
               <View style={styles.row}>
                 <View style={styles.rowItem}>
                  <Icon name="shield-account" size={18} color="hotpink" />
                 </View>
                 <View style={styles.rowItem}>
                   <Text style={styles.text}>Base Combat Stats</Text>
                 </View>
               </View>
             </View>
             <View style={styles.item}>
               <Text style={styles.text}>Hello</Text>
             </View>
           </View>
         </View>
       </>
     )
   }
 }

 export default SpeciesChoice;

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingHorizontal: 5,
     paddingTop: 10,
     backgroundColor: "black",
   },
   column: {
     flex: 1,
   },
   row: {
     flexDirection: "row",
     borderBottomColor: 'hotpink',
     borderWidth: 1,
   },
   rowItem: {
     paddingRight: 15,
   },
   item: {
     paddingVertical: 5,
   },
   title: {
     fontSize: 24,
     color: "white",
     paddingBottom: 10,
   },
   text: {
     fontSize: 16,
     marginBottom: 5,
     textAlign: "center",
     color: "white",
     alignItems: "center",
   },
   stats: {
     flex: 1,
     fontSize: 12,
     paddingTop: 5,
     color: "white",
     fontStyle: "italic",
   },
 });
