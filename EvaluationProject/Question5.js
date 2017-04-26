'use strict';
var Password = require('./Password');
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

var question6 = require('./Question6');

var styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    paddingTop:69,
    justifyContent:'space-between',
  },
  text:{
    color: 'black',
    backgroundColor: 'white',
    fontSize: 18,
    marginHorizontal:20,
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
    height: 150,
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
});

class Question5 extends Component{

    onButtonPress(){
        this.props.navigator.push({
        title: "Question6",
        component: question6,
      });
    }
    render(){
    
    return(
      <View style={styles.container}>
       <View style={styles.imageBox}>
            <Image source={require('./Resources/title.png')}
                style={styles.titleImage}/>
        </View>
         <Text style={styles.text}>
            Please suggest other topics that should be covered in futher activities:{'\n'}

            </Text>
         <View style={styles.inputBox}>
          <TextInput style = {styles.input}
              placeholder = ""
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

module.exports = Question5;
