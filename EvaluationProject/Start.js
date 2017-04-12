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

var Info = require('./ActivityInfo');
var password = require('./password');
var styles = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    flex:1,
    paddingTop:90,
    paddingBottom:20,
    alignItems:'center',
    flexDirection:'column',
  },
  text:{
    color: 'black',
    backgroundColor: 'white',
    fontSize: 20,
    marginHorizontal:30,
    paddingTop: 20,
  },
  buttonBox:{
    flexDirection:'column',
    justifyContent: 'space-around',
    flex:1,
    paddingTop: 80,
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
  imageBox:{
    flex:3,
    alignItems:'center',
  },
  image:{
    width: 180,
    height: 180,
  },
});

class Start extends Component{

    onCreatePressed(){
        this.props.navigator.push({
            title: 'Event Information',
            component: Info,
        });
    }
    onTakePressed(){
        this.props.navigator.push({
            title: 'Password',
            component: password,
           
        });
    }
    render(){
    return(
      <View style={styles.container}>
        <View style={styles.imageBox}>
            <Image source={require('./Resources/logo.png')}
                style={styles.image}/>
            <Text style={styles.text}>EVALUATION OF CONTINUING MEDICAL EDUCATION ACTIVITY</Text>
        </View>
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.button}
            onPress={this.onCreatePressed.bind(this)}
            underlayColor= '#99d9f4'>
            <Text style={styles.buttonText}>Create Evaluation</Text>
          </TouchableHighlight>

           <TouchableHighlight style={styles.button}
            onPress={this.onTakePressed.bind(this)}
            underlayColor= '#99d9f4'>
            <Text style={styles.buttonText}>Take Evaluation</Text>
          </TouchableHighlight>
        </View>
      </View>)
    }
}

module.exports = Start;
