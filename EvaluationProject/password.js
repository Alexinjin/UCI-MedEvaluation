'use strict';
var Complete = require('./Complete');
var Password = require('./Password');
import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	Image,
	KeyboardAvoidingView
}from 'react-native';

var styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    paddingTop:69,
    justifyContent:'space-between',
  },
  // text:{
  //   color: 'black',
  //   backgroundColor: 'white',
  //   fontSize: 30,
  //   margin: 80,
  //   flex:2,
  // },
  imageBox:{
    flex:1,
    alignSelf:'flex-start',
    marginLeft: 10,
  },
  image:{
    width: 136,
    height: 35,
  },
  buttonBox:{
    flexDirection:'column',
    justifyContent: 'flex-end',
    flex:3,
    paddingBottom: 20,
    alignSelf:'stretch',
    marginHorizontal: 30,
  },
  buttonText:{
    fontSize:14,
    color: 'white',
    textAlign: 'center',
  },
  button:{

    backgroundColor:'#48BBEC',
    borderColor:'#48BBEC',
    borderRadius: 10,
    alignSelf:'stretch',
    padding:14,
    justifyContent: 'center',
  },
});

class SearchPage extends Component {


	constructor(props){
      super(props);
      this.state = {
        title: this.props.password,
      };
    }

    onPasswordCharged(event){
    	this.setState({ title: event.nativeEvent.text });
    }
  	onStartPressed(){
        this.props.navigator.push({
            title: 'Complete',
            component: Complete,
           
    	});
    }
  render(){
    return(
    <View style={styles.container}>
       <View style={styles.imageBox}>
            <Image source={require('./Resources/title.png')}
                style={styles.image}/>
        </View>
        <View style={styles.inputBox}>
          <TextInput style = {styles.input}
              onChange={this.onPasswordCharged.bind(this)}
              placeholder = ' Create Password:'
              autoCapitalize = 'none'/>
        </View>
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.button}
            onPress={this.onStartPressed.bind(this)}
            underlayColor= '#99d9f4'>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>
        </View>
    </View>)
	}
}
module.exports = SearchPage;