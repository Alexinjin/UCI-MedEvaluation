'use strict';
var Complete = require('./Complete');
//var Password = require('./Passwords');
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
	description: {
		marginBottom: 100,
		fontSize: 30,
		textAlign: 'center',
		color: 'black'


	},
	container: {
		//flex:1,
		//paddingTop: 69,
		//marginTop: 40,
		flexDirection: 'column',
		justifyContent: 'space-between',

		alignItems: 'center'
	},

	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch'
	},

	buttonText:{
		fontSize: 14,
		color: 'white',
		alignSelf: 'center'
	},

	button: {
		height: 45,
		flex: 1,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},

	searchInput: {
		height: 36,
		//padding: 20,
		marginLeft: 20,
		marginRight: 20,
		//flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48BBEC',
		borderRadius: 8,
		marginBottom: 200,
		color: '#48BBEC'
	},

	image:{
		width: 136,
    	height: 35,
    	marginTop: 69,
    	marginLeft: 10,
    	marginBottom: 50
	}
});

class SearchPage extends Component {


	onButtonPress(){
		var result = this.state.password
		
			this.props.navigator.push({
    		title: "Finished",
    		component: Complete,
    		passProps: {
    		
	 			title : this.props.title,
				department : this.props.department,
				name1 : this.props.name1,
				topic1 : this.props.topic1,
				name2 : this.props.name2,
				topic2 : this.props.topic2,
				name3 : this.props.name3,
				topic3 : this.props.topic3,
				name4 : this.props.name4,
				topic4 : this.props.topic4,
				name5 : this.props.name5,
				topic5 : this.props.topic5,  
				password: this.state.password, 			
    			}
  			
			});
		
	}

	constructor(props){
		super(props);
		this.state = {passowrd: "" };
	}
	render(){
		return(
			<KeyboardAvoidingView behavior = "padding" >
				<Image source={require('./Resources/title.png')} style = {styles.image}/>
				<View style = {styles.container}>

					<Text style = {styles.description}> Password for Evaluation </Text>

					<TextInput
			  		style = {styles.searchInput}
			  		placeholder = 'Enter your password!'
			  		onChangeText = {(password) => this.setState({password}) }
			  		/>

			 		<View style = {styles.flowRight}>
						<TouchableHighlight onPress = {() => this.onButtonPress()} style = {styles.button}
						underlayColor = '#99d9f4'>

							<Text style = {styles.buttonText} >Confirm</Text>
						</TouchableHighlight>
					</View>
				</View>
			</KeyboardAvoidingView>
			);
	}
}
module.exports = SearchPage;
