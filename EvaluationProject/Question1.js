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

var question2 = require('./Question2');

var styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    paddingTop:69,
    justifyContent:'space-between',
  },
  TextBox:{
    flex:4,
    marginHorizontal: 10,
    alignSelf:'flex-start',
  },
  text:{
    color: 'black',
    backgroundColor: 'white',
    fontSize: 18,
  },
  imageBox:{
    flex:2,
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

class Question1 extends Component{
    onNextPressed(){
      this.props.navigator.push({
            title: 'Question 2',
            component: question2,
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
          <Text style={styles.text}>Question1 {'\n\n'}
            Overall evaluation of this event:{'\n\n'}
            Excellent{'\n\n'}
            Very Good{'\n\n'}
            Good{'\n\n'}
            Fair{'\n\n'}
            Poor{'\n\n'}
            </Text>
        </View>
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.button}
            onPress = {this.onNextPressed.bind(this)}
            underlayColor= '#99d9f4'>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>

        </View>
      </View>)
    }
}

module.exports = Question1;
