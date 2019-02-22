import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


 export default class Header extends Component {

  render(){
    return(
      <View style={styles.header}>
       <Text style={styles.textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height:100,
    // alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "thistle",
    padding: 5,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    // marginTop: 33,
  },

  textStyle:{

    backgroundColor: "lightblue",
    padding:3,
    fontWeight: 'bold',
    textAlign: 'center',

  },
});
