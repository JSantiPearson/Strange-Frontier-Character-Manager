import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TrinitaireArms from '../Catalogues/TrinitaireArms'
import DodanaArmsEmporium from '../Catalogues/DodanaArmsEmporium'
import NarmatoArms from '../Catalogues/NarmatoArms'

function Catalogue(route, navigation, addItem, screenName, name, type){
  return(
    <>
      <TouchableOpacity onPress={() => navigation.navigate(screenName, {
          itemCallback: addItem,
          ranged: route.params.ranged,
          melee: route.params.melee,
          armor: route.params.armor,
          gear: route.params.gear,
          misc: route.params.misc,
        })}>
        <View style={styles.column}>
          <Text style={styles.catalogueName}>{name}</Text>
          <Text style={styles.class}>{type}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

class Catalogues extends Component {

  addItem = (item) => {
    this.props.route.params.itemCallback(item);
  }

  render() {
    console.log("Catalogue ranged param: " + this.props.route.params.ranged);
     return (
      <>
      <SafeAreaView>
        <ScrollView>
         <View style={styles.container}>
           <Catalogue
             route={this.props.route}
             navigation={this.props.navigation}
             addItem={this.addItem}
             screenName={'Trinitaire'}
             name={'Trinitaire Arms'}
             type={'Class D & C'}
           />
           <Catalogue
             route={this.props.route}
             navigation={this.props.navigation}
             addItem={this.addItem}
             screenName={'Lepars'}
             name={'Lepars\' Black Market'}
             type={'Class D & C'}
           />
           <Catalogue
             route={this.props.route}
             navigation={this.props.navigation}
             addItem={this.addItem}
             screenName={'Dodana'}
             name={'Dodana Arms'}
             type={'Class C'}
           />
           <Catalogue
             route={this.props.route}
             navigation={this.props.navigation}
             addItem={this.addItem}
             screenName={'Narmato'}
             name={'Narmato Arms'}
             type={'Class D'}
           />
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
     backgroundColor: 'black',
   },
   option: {
     paddingHorizontal: 10,
     paddingVertical: 5,
     marginBottom: 2,
     borderBottomColor: 'rgb(250, 0, 115)',
     borderBottomWidth: 1,
   },
   column: {
     flex: 1,
     justifyContent: "space-evenly",
   },
   catalogue: {
     flex: 1,
     justifyContent: 'center',
     alignContent: 'stretch',
     alignItems: 'center',
   },
   catalogueName: {
     flex: 1,
     fontSize: 16,
     paddingTop: 5,
     color: "white",
   },
   class: {
     flex: 1,
     fontSize: 12,
     paddingTop: 5,
     fontStyle: "italic",
     color: "white",
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
