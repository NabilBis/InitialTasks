import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button,View,TouchableOpacity} from 'react-native';



export default class SecondView extends Component{

  static navigationOptions = {
             title: 'SecondView',
           }

  render(){
    return(
      <View style={styles.container}>
      <TouchableOpacity
         style={styles.counter}
      >
         <Text style={{ fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 10,}}>  Second View </Text>
           </TouchableOpacity>
           </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    padding: 31,
    backgroundColor: '#F5FCFF',
  },
  counter:{
    width:100,
    height:100,
    borderRadius: 26/2,
    justifyContent: 'center',
    alignSelf:'center',
    backgroundColor:'mediumvioletred',
  },
});
