import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

class MoveScreen extends Component {
  render() {
     return (
       <>
         <View style={styles.sectionDescription}>
           <Text>Move</Text>
         </View>
         <View style={styles.sectionDescription}>
           <Text>Move</Text>
         </View>
         <View style={styles.sectionDescription}>
           <Text>Move</Text>
         </View>
         <View style={styles.sectionDescription}>
           <Text>Move</Text>
         </View>
         <View style={styles.sectionDescription}>
           <Text>Move</Text>
         </View>
         <View style={styles.sectionDescription}>
           <Text>Shift</Text>
         </View>
         <View style={styles.sectionDescription}>
           <Text>E-Move</Text>
         </View>
         <View style={styles.sectionDescription}>
           <Text>E-Move</Text>
         </View>
         <View style={styles.sectionDescription}>
           <Text>E-Move</Text>
         </View>
         <View style={styles.sectionDescription}>
           <Text>FLASH</Text>
         </View>
       </>
     )
   }
 }

 export default MoveScreen;

 const styles = StyleSheet.create({
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     textAlign: 'center',
     color: Colors.dark,
   },
 });
