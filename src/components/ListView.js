import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './commun/header.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/index';
import List from './List';


export default class ListView extends Component {

  render(){
    return (
      <Provider store={createStore(reducers)} >
      <View style={styles.container}>
        <Header title ="React listView" />
        <List/>
        </View>
         </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: "white",
  },
});
