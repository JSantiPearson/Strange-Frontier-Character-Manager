import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView, SectionList} from 'react-native'
import Item from './item'

class Catalogue extends Component {

  addItem = (item) => {
    this.props.route.params.itemCallback(item);
  }

  renderItem = ( item ) => {
    return(
      <View style={styles.section}>
        <Item
          {...this.props}
          key={item.name}
          amount={item.amount}
          itemCallback={this.addItem}
          name={item.name}
          type={item.type}
          price={item.price}
          range={item.range}
          damage={item.damage}
          durability={item.durability}
          category={item.category}
          stats={item.stats}
          description={item.description}
          misc={item.misc}
          special={item.special}
        />
      </View>
    )
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <SectionList
            sections={this.props.DATA}
            removeClippedSubviews={false}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.title}>{title}</Text>
            )}
          />
        </SafeAreaView>
      </>
    )
  }
}

export default Catalogue;

const styles = StyleSheet.create({
   container: {
     paddingVertical: 20,
     backgroundColor: "black",
   },
   title: {
     color: "white",
     fontSize: 22,
     marginLeft: 5,
     paddingRight: 10,
     paddingBottom: 5,
     borderBottomColor: 'rgb(250, 0, 115)',
     borderBottomWidth: 1,
   },
   section: {
     marginLeft: 20,
     marginRight: 15,
     paddingVertical: 5,
     borderBottomColor: 'rgb(250, 0, 115)',
     borderBottomWidth: StyleSheet.hairlineWidth,
   }
 }
);
