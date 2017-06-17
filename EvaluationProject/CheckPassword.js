'use strict';
var Password = require('./Passwords');
import React, {Component} from 'react'
import{
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  navigator,
  BackIOS,
} from 'react-native';

var question1 = require('./Question1');

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
  	width: 80,
    height: 80,
    //padding:30,
  },
  inputBox:{
  	paddingTop:30,
    flexDirection:'column',
    flex:1,
    alignSelf:'stretch',
    justifyContent:'space-between',
    marginHorizontal: 25,
  },
  input:{
    height: 35,
    borderColor: 'grey',
    borderWidth: 1.5,
    borderRadius: 10,
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

  choiceButtonNoPress:{
    backgroundColor:'white',
    borderColor:'black',
    borderRadius: 10,
    justifyContent: 'center',

  },
});

class CheckPassword extends Component{

    constructor(props){
      super(props);
      this.state = {
        result : NaN
      }
      
    }

    onButtonPress(){
      if (Object.is(this.state.result,NaN))
      {

      }
      else {
        this.props.navigator.push({
        title: "Question 1",
        component: question1,
        passProps:{
          password: this.result,
        }
      });
      }
    }
    

    render(){
    
    return(
      <View style={styles.container}>
       <View style={styles.imageBox}>
            <Image source={require('./Resources/title.png')}
                style={styles.titleImage}/>
            
        </View>
        <Image source={require('./Resources/secure.png')}
                style={styles.image}/>
         <View style={styles.inputBox}>
          <TextInput style = {styles.input}
              onChangeText = {(result) => this.setState({result})}
              placeholder = " Enter evaluation password:"
              autoCapitalize = 'none'/>
          </View>
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.button}
          	onPress = {() => this.onButtonPress()} 
            underlayColor= '#99d9f4'>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>

        </View>


      </View>)
    }
}

module.exports = CheckPassword;
