'use strict';
import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image,
	KeyboardAvoidingView
}from 'react-native';

var Start = require('./Start');

var styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    paddingTop:69,
    justifyContent:'space-between',
  },
  imageBox:{
    flex:1,
    alignSelf:'flex-start',
    marginLeft: 10,
    justifyContent:'space-between',
  },
  titleImage:{
    width: 136,
    height: 35,
  },
  image:{
  	//alignSelf:'center',
  	width: 150,
    height: 150,
    //padding:30,
  },
  buttonBox:{
    flexDirection:'column',
    justifyContent: 'flex-end',
    flex:4,
    paddingBottom: 20,
    alignSelf:'stretch',
    marginHorizontal: 30,
  },
  buttonText:{
    fontSize:18,
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
  text:{
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    marginHorizontal:30,
    paddingTop: 20,
  },
});

class LastPage extends Component {

	onButtonPress(){
    	this.props.navigator.popToTop();
  	}

	render(){
		return(
		      <View style={styles.container}>
       <View style={styles.imageBox}>
            <Image source={require('./Resources/title.png')}
                style={styles.titleImage}/>
            
        </View>
        <Image source={require('./Resources/complete.png')}
                style={styles.image}/>
        <Text style={styles.text}>Completed.</Text>
        <Text style={styles.text}>Thank you for the participation!.</Text>
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.button}
          	onPress = {() => this.onButtonPress()} 
            underlayColor= '#99d9f4'>
            <Text style={styles.buttonText}>Return</Text>
          </TouchableHighlight>

        </View>
      </View>)
		
	}
}
module.exports = LastPage;