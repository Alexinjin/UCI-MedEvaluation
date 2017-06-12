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

var question8 = require('./Question8');

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

class Question7 extends Component{
    onButtonPress(){
        this.props.navigator.push({
        title: "Question8",
        component: question8,
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
          <Text style={styles.text}>
            Issues in cultural and linguistic competency (e.g. differences in prevalence, diagnosis, 
            treatment in diverse populations, linguistic skills, pertinent cultural data) were adequately
            addressed in this activity: {'\n\n'}

            -Strongly Agree{'\n'}
            -Agree {'\n'}
            -Neutral{'\n'}
            -Disgress {'\n'}
            -Strong Disagree{'\n'}
            -N/A {'\n'}
            

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

module.exports = Question7;
