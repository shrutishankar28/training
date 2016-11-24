import React,{Component} from 'react';

import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  ScrollView,
  TextInput
} from 'react-native';
//import {connect} from 'react-redux';

export default class sample2 extends React.Component{
  constructor(props)
  {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {

      dataSource: ds.cloneWithRows(
        //this.state.users;
        //'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
        [{"name":"Shruti","title":"Shankar"},{"name":"Sweta","title":"Pandey"}]
      )
    };


  }

  handleSelect(uname)
  {
    this.props.dispatch(chatWith(uname));
  }



  render(){
    return  (
      <ScrollView style={{flex: 1}}>
      <Text style={styles.steelblue}>Online Users</Text>

      <ListView style={{flex: 1}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={this.handleSelect.bind(this)} underlaycolor="grey">
            <Text style={styles.usr}>
              {`${rowData.name}\u0009 \u0009 \u0009 \u0009 \u0009 \u0009 \u2B24 `}

            </Text>
            </TouchableHighlight>
          }
        />

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  steelblue: {
    fontSize: 20,
    color: 'steelblue',
    flex: 3,
    marginBottom: 5,
    //backgroundColor: 'white'
  },
  usr: {
      //content: '\u2B24',
      color: 'green',

      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#F6F6F6',
      marginBottom: 5,
      //backgroundColor: 'white'

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sample2', () => sample2);
