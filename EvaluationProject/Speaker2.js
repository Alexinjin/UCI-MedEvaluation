'use strict';
var Password = require('./Passwords');
var Speaker3 = require('./Speaker3');

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
    fontSize: 30,
    margin: 80,
    flex:2,
  },
  imageBox:{
    flex:1,
    alignSelf:'flex-start',
    marginLeft: 10,
  },
  image:{
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
    marginVertical: 10,
    backgroundColor:'#48BBEC',
    borderColor:'#48BBEC',
    borderRadius: 10,
    alignSelf:'stretch',
    padding:14,
    justifyContent: 'center',
  },
});

class Speaker2 extends Component{


    constructor(props){
      super(props);
        this.state = {
          name2 : "",
          topic2 : "",
        }
    }
    onButtonPress(){
        this.props.navigator.push({
        title: "Password",
        component: Password,
        passProps:{
          title : this.props.title,
          department : this.props.department,
          name1 : this.props.name1,
          topic1 : this.props.topic1,
          name2 : this.state.name2,
          topic2 : this.state.topic2,
        }
      });
    }
    
    onMoreButton(){
      this.props.navigator.push({
        title:"Speaker #3",
        component: Speaker3,
        passProps:{
          title : this.props.title,
          department : this.props.department,
          name1 : this.props.name1,
          topic1 : this.props.topic1,
          name2 : this.state.name2,
          topic2 : this.state.topic2,
        }
      })
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
              placeholder = " Speaker's name:"
              onChangeText = {(name2) => this.setState({name2})}
              autoCapitalize = 'none'/>
          <TextInput style = {styles.input}          
              placeholder = ' Topic:'
              onChangeText = {(topic2) => this.setState({topic2})}
              autoCapitalize = 'none'/>
          </View>


        <View style={styles.buttonBox}>

          <TouchableHighlight onPress = {() => this.onMoreButton()} style={styles.button}
            underlayColor= '#99d9f4'>
            <Text style={styles.buttonText}>More</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress = {() => this.onButtonPress()} style={styles.button}
            underlayColor= '#99d9f4'>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>

        </View>
      </View>)
    }
}

module.exports = Speaker2;
