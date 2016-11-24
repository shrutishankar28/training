/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
 Text,
 View,
 TouchableHighlight,
 StyleSheet,
 TextInput
} from 'react-native';

export default class Login extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      username:'',
    }
  }
  handleChange(e)
  {
    this.setState({
      username: e.nativeEvent.text
    });
  }
  handleSubmit()
  {
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>

      <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={this.handleChange.bind(this)}
            placeholder={'Enter User Nickname'}
            maxLength={12}
            multiline={false}
      />

      <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={this.handleSubmit.bind(this)}
            >
            <Text style={styles.label}>LOGIN</Text>
          </TouchableHighlight>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'stretch',
   backgroundColor: '#6E5BAA'
 },
 loginContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 input: {
   width: 250,
   color: '#555555',
   padding: 10,
   height: 50,
   borderColor: '#32C5E6',
   borderWidth: 1,
   borderRadius: 4,
   alignSelf: 'center',
   backgroundColor: '#ffffff'
 },
 button: {
   justifyContent: 'center',
   alignItems: 'center',
   borderWidth: 1,
   borderRadius: 5,
   borderColor: '#328FE6',
   padding: 10,
   marginTop: 10,
   backgroundColor: '#32c5e6'
 },
 label: {
   width: 230,
   //flex: 1,
   alignSelf: 'center',
   textAlign: 'center',
   fontSize: 20,
   fontWeight: '600',
   color: '#ffffff'
 }
});
