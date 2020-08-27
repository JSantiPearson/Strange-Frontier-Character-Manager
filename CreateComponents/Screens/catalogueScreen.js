import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TrinitaireArms from '../Catalogues/TrinitaireArms'
import DodanaArmsEmporium from '../Catalogues/DodanaArmsEmporium'

class Catalogues extends Component {

  addItem = (item) => {
    this.props.route.params.itemCallback(item);
  }
  render() {
     return (
      <>
      <SafeAreaView>
        <ScrollView>
           <View style={styles.container}>
             <View style={styles.catalogue}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Trinitaire', { itemCallback: this.addItem })}>
                <ImageBackground style={styles.image} source={require('../../assets/img/blue.png')}>
                  <Text style={styles.text}>Trinitaire Arms</Text>
                </ImageBackground>
               </TouchableOpacity>
             </View>
             <View style={styles.catalogue}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Dodana', { itemCallback: this.addItem })}>
                 <ImageBackground style={styles.image} source={require('../../assets/img/pink.jpeg')}>
                   <Text style={styles.text}>Dodana Arms Emporium</Text>
                 </ImageBackground>
               </TouchableOpacity>
             </View>
           </View>
         </ScrollView>
       </SafeAreaView>
      </>
     )
   }
 }

 export default Catalogues;

 const styles = StyleSheet.create({
   container: {
     flexDirection: 'column',
   },
   catalogue: {
     flex: 1,
     justifyContent: 'center',
     alignContent: 'stretch',
     alignItems: 'center',
   },
   image: {
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height / 5,
   },
   text: {
     fontFamily: 'CCWildWordsRoman',
     fontSize: 32,
     color: Colors.white,
   }
 });
