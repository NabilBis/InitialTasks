import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {View,Text} from 'react-native';
import ListItem from './ListItem';


class List extends Component {

  renderItem(library){
      return <ListItem library={library} />;
  }

  render(){

    return (
           <FlatList
             data={this.props.listProp}
             renderItem={this.renderItem}
             keyExtractor={(library)=> library.id}
           />
          );
  }
}

const mapStateToProps = state => {
    return {listProp: state.libraries};
};

export default connect(mapStateToProps)(List);
