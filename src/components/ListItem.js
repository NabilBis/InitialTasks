import React,{Component} from 'react';
import CardSection from './commun/CardSection.js';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation }  from 'react-native';
import * as actions from '../actions/index';
import {connect} from 'react-redux';


class ListItem extends Component {

componentWillUpdate(){

  LayoutAnimation.spring();
}

  renderDescription(){

    const {expanded, library} = this.props;
    if(expanded){
      return (<Text style={{fontSize:15,margin:10,}}> {library.item.description}</Text>);
    }
  }


render(){
  const {library} = this.props;

  return (
          <TouchableWithoutFeedback
              onPress = { () => this.props.selectLibraryItem(library.item.id) }
          >
           <View>
            <CardSection>
              <Text style={{fontSize:18,margin:10,}}>{library.item.title}</Text>
            </CardSection>
            {this.renderDescription()}

           </View>
          </TouchableWithoutFeedback>
          );
    }
}

const mapStateToProps = (state,ownProps) => {

    const expanded = state.selectedItem === ownProps.library.item.id;

  return { expanded };
};
export default connect(mapStateToProps,actions)(ListItem);
