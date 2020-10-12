import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Feats extends Component {
  render() {
     return (
       <>
         <View style={styles.sectionDescription}>
           <Text>Add Note</Text>
         </View>
       </>
     )
   }
 }

 export default Feats;

 const styles = StyleSheet.create({
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     textAlign: 'center',
     color: Colors.dark,
   },
 });
