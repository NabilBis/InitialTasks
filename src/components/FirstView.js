/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button,View,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';


const colors = ['skyblue','firebrick','pink','mediumvioletred','tomato','olivedrab'];

type Props = {};
export default class FirstView extends Component<Props> {

constructor(){
  super();
  this.updateState = this.updateState.bind(this);
}

  state = { numberOfTouches:0,
            firstInitialisation:true,
          };

  static navigationOptions = {
             title: 'FirstView',
           };

  updateState(){
            this.setState({numberOfTouches:this.state.numberOfTouches+1})
          }

   initialiseCounter = () => this.setState({ numberOfTouches:0,
                                                        firstInitialisation:false})

  render() {





    return (
      <View style={styles.container}>

       <TouchableOpacity
          style={styles.counter}
          onPress={this.updateState}
       >
          <Text style={{ fontWeight: 'bold',
                         textAlign: 'center',
                         fontSize: 10,}}>  Increment </Text>
            </TouchableOpacity>


            <Text style={{width:66,
                          height:66,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          alignSelf:'center',
                          fontSize: 18,
                          borderRadius:15,
                          backgroundColor:this.state.numberOfTouches < 3 ? colors[this.state.numberOfTouches] : 'olivedrab',
            }}>{this.state.numberOfTouches}</Text>


            <TouchableOpacity
               style={{width:this.state.numberOfTouches<  3 && this.state.firstInitialisation ? 0 :66,
               height:66,
               borderRadius: 66/2,
               alignSelf:'flex-end',
               justifyContent: 'center',
               backgroundColor:'slategrey',}}
               onPress={() => { //initialiseCounter();
                                this.props.navigation.navigate('Dos');}}
            >
               <Text style={{ fontWeight: 'bold',
                              textAlign: 'center',
                              fontSize: 10,}}>  Initialise counter </Text>
                 </TouchableOpacity>

            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-between',
    padding: 31,
    backgroundColor: '#F5FCFF',
  },
  counter:{
    width:66,
    height:66,
    borderRadius: 66/2,
    justifyContent: 'center',
    alignSelf:'flex-start',
    backgroundColor:'mediumvioletred',
  },
  initial: {
    width:66,
    height:66,
    borderRadius: 66/2,
    backgroundColor:'slategrey',
  },


});
