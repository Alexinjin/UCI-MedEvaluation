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

var styles = StyleSheet.create({
	description: {
		marginBottom: 20,
		fontSize: 30,
		textAlign: 'center',
		color: 'black'
	},

	container: {
		padding: 30,
		marginTop: 100,
		alignItems: 'center'
	},


	image1:{

		width: 136,
    	height: 35,
    	marginTop: 69,
    	marginLeft:10,
    	//marginBottom: 50
	},

	image2:{
		width: 200,
		height: 200
	}
});

class Complete extends Component {


	render(){
		return(
			<KeyboardAvoidingView behavior='padding'>
			<Image source={require('./Resources/title.png')} style = {styles.image1}/>
			<View style = {styles.container}>
			  <Text style = {styles.description}>
			  Complete! Yeah!
			  </Text>

			  <Image source={require('./Resources/complete.png')} style={styles.image2}/>
			  <Text style = {styles.description}>
			  Password for this Eval is:
			  </Text>

			  <Text style = {styles.description}>
			  XXXXXXXX
			  </Text>

			</View>

			</KeyboardAvoidingView>
			);
	}
}
module.exports = Complete;