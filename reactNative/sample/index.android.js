// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//

//Login


// import React, { Component } from 'react';
// import {
//   AppRegistry,
//  Text,
//  View,
//  TouchableHighlight,
//  StyleSheet,
//  TextInput
// } from 'react-native';
// import Login from './comp/login';
//
// export default class sample extends Component {
//
//   render() {
//     return (
//     <View style={styles.container}>
//       <Login />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'stretch',
//     backgroundColor: '#F5FCFF',
//   }
// });



//Online uSers
import React,{Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  ListView,
  ScrollView,
  Button,
  TextInput
} from 'react-native';

class sample extends React.Component{
  constructor(props)
  {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{"name":"Shruti","title":"Shankar"},{"name":"Sweta","title":"Shankar"},
      {"name":"Ankit","title":"Shankar"},{"name":"Bhavish","title":"Shankar"},{"name":"Mukesh","title":"Shankar"},
      {"name":"Aditya","title":"Shankar"}])
    };
  }
  render(){
    return  (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.toolbar}>
            <Text style={styles.toolbarTitle}> Online Users</Text>
            <Button
               title="Logout"
               color="#328FE6"
            />
          </View>
        <View style={styles.listContainer}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
                <TouchableHighlight  underlaycolor="grey">
                  <View style={styles.listItem}>
                    <View style={styles.listInfo}>
                      <Text style={styles.usr}>
                        {`\u2B24  \u0009 \u0009 \u0009 \u0009 \u0009 \u0009 ${rowData.name}`}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              }
          />
        </View>
      </View>
    </ScrollView>
  )
}
}

const styles = StyleSheet.create({
  usr: {
      color: 'green',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#F6F6F6',
      marginBottom: 5,
  },
  listContainer: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 10
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f8fc',
    borderBottomWidth: 0.5,
    borderColor: '#D0DBE4',
    padding: 5
  },
  listInfo: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  toolbar:{
        backgroundColor:'#6E5BAA',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
  },
  toolbarButton:{
        width: 50,            //Step 2
        color:'#6E5BAA',
        textAlign:'center'
  },
  toolbarTitle:{
        color:'#fff',
        fontSize: 20,
        textAlign:'left',
        fontWeight: '600',
        fontWeight:'bold',
        flex:1                //Step 3
    }
});


//chatBox

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableHighlight,
//   ActivityIndicator,
//   ListView,
//   Dimensions
// } from 'react-native';
//
// let index=0;
// var windowSize = Dimensions.get('window');
//
// export default class sample extends Component {
//
//     constructor(props) {
//       super(props);
//       //binding function
//       this.addMessage = this.addMessage.bind(this);
//       this.state ={
//         messageList: ['abcd'],
//         msgString: ''
//       };
//   }
//
//   addMessage(){
//     alert(this.state.msgString);
//     this.state.messageList.push(this.state.msgString);
//     this.setState({messageList:this.state.messageList});
//   }
//
//   handleText(event) {
//       this.setState({
//             msgString: event.nativeEvent.text
//       });
//   }
//
//   render() {
//     var messageList = this.state.messageList.map((item, index) => {
//
//       return (
//         <View key={index}>
//           <Text>{item}</Text>
//         </View>
//       );
//     });
//
//     return(
//           <View style={styles.container}>
//                   <View style={styles.topContainer}>
//                     <TouchableHighlight
//                       underlayColor={'#4e4273'}
//                       onPress={this.onBackPress}
//                       style={{marginLeft: 15}}
//                       >
//                       <Text style={{color: '#fff'}}>&lt; Back</Text>
//                     </TouchableHighlight>
//                   </View>
//
//                   <View style={styles.chatContainer}>
//                      { messageList }
//                   </View>
//
//                   <View style={styles.inputContainer}>
//                     <View style={styles.textContainer}>
//                       <TextInput
//                         style={styles.input}
//                         value={this.state.msgString}
//                         onChange={this.handleText.bind(this)}
//                         />
//                     </View>
//
//                     <View style={styles.sendContainer}>
//                       <TouchableHighlight
//                         underlayColor={'#4e4273'}
//                         onPress={ this.addMessage}>
//                           <Text style={styles.sendLabel}>SEND</Text>
//                       </TouchableHighlight>
//                     </View>
//                   </View>
//                 </View>
//     );
//   }
//
//   onBackPress() {
//       this.props.navigator.pop();
//   }
// }
//
// var styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'stretch',
//         backgroundColor: '#ffffff'
//       },
//       topContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         backgroundColor: '#6E5BAA',
//         paddingTop: 20,
//       },
//       chatContainer: {
//         flex: 11,
//         justifyContent: 'center',
//         alignItems: 'stretch'
//
//       },
//       inputContainer: {
//   flex: 1,
//   flexDirection: 'row',
//   justifyContent: 'space-around',
//   alignItems: 'center',
//   backgroundColor: '#6E5BAA'
// },
// textContainer: {
//   flex: 1,
//   justifyContent: 'center'
// },
// sendContainer: {
//   justifyContent: 'flex-end',
//   paddingRight: 10
// },
// sendLabel: {
//   color: '#ffffff',
//   fontSize: 15
// },
// input: {
//   width: windowSize.width - 70,
//   color: '#555555',
//   paddingRight: 10,
//   paddingLeft: 10,
//   paddingTop: 5,
//   height: 32,
//   borderColor: '#6E5BAA',
//   borderWidth: 1,
//   borderRadius: 2,
//   alignSelf: 'center',
//   backgroundColor: '#ffffff'
// }
// });



 AppRegistry.registerComponent('sample', () => sample);
