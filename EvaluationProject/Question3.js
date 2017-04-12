'use strict';

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

var question4 = require('./Question4');

var styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    paddingTop:69,
    justifyContent:'space-between',
  },
  TextBox:{
    flex:8,
    marginHorizontal: 15,
    alignSelf:'flex-start',
  },
  text:{
    color: 'black',
    backgroundColor: 'white',
    fontSize: 18,
    flex:7,
  },
  title:{
    color: 'black',
    backgroundColor: 'white',
    fontSize: 25,
    flex:1,
  },
  imageBox:{
    flex:1,
    alignSelf:'flex-start',
    marginLeft: 10,

  },
  imagetitle:{
    width: 136,
    height: 35,
  },
  inputBox:{
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
    flex:2,
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

class Question3 extends Component{
    onButtonPress(){
        this.props.navigator.push({
        title: "Question4",
        component: question4,
      });
    }

    render(){
    return(
      <View style={styles.container}>
       <View style={styles.imageBox}>
            <Image source={require('./Resources/title.png')}
                style={styles.imagetitle}/>
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.title}>Question3 {'\n'}</Text>
          <Text style={styles.text}>
            Please rate the speaker(s) and write constructive suggestions to aid
            the speaker in future presentations: {'\n\n'}
            Speaker: {'\n'}
            Topic: {'\n'}
            1.Delivery{'\n\n'}
            -Excellent -Very Good -Good -Fair -Poor -None {'\n'}
            2.Content{'\n'}
            -Excellent -Very Good -Good -Fair -Poor -None {'\n'}
            3.Slides/Handouts{'\n\n'}
            -Excellent -Very Good -Good -Fair -Poor -None {'\n'}
            4.Practical Value{'\n\n'}
            -Excellent -Very Good -Good -Fair -Poor -None {'\n'}
            5.Was there a bias in this presentation?{'\n'}
            -Excellent -Very Good -Good -Fair -Poor -None {'\n'}

            </Text>
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

module.exports = Question3;
