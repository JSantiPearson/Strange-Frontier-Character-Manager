import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

function CatalogueButton({ screenName }) {
  const navigation = useNavigation();
  return (
    <Button
      title={'Browse Catalogues'}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

class EquipmentScreen extends Component {
  state = {
    equipped: []
  }
  render() {
     return (
       <>
         <View style={styles.sectionDescription}>
           <CatalogueButton screenName="Catalogues" />
         </View>
         <View style={styles.sectionDescription}>
           <Text>Equipment:</Text>
         </View>
       </>
     )
   }
 }

 export default EquipmentScreen;

 const styles = StyleSheet.create({
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     textAlign: 'center',
     color: Colors.dark,
   },
 });
