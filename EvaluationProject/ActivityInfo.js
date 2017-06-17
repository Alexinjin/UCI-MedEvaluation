'use strict';

import React, {Component} from 'react'
import{
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

var speaker = require('./Speaker');

var styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    paddingTop:69,
    justifyContent:'space-between',
  },
  // text:{
  //   color: 'black',
  //   backgroundColor: 'white',
  //   fontSize: 30,
  //   margin: 80,
  //   flex:2,
  // },
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



class ActivityInfo extends Component{
  constructor(props){
      super(props);
      this.state = {
        title: this.props.title,
        department: this.props.department,
        numOfSpeaker: this.props.numOfSpeaker,
      };
    }

  onTitleCharged(event){
    this.setState({ title: event.nativeEvent.text });
  }

  onDepartCharged(event){
    this.setState({ department: event.nativeEvent.text });
  }

  onNumCharged(event){
    this.setState({ numOfSpeaker: parseInt(event.nativeEvent.text) });
  }
  onStartPressed(){
        this.props.navigator.push({
            title: 'Speaker #1',
            component: speaker,
            passProps:{
              title: this.state.title,
              department: this.state.department,
            }
           
        });
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
              onChange = {this.onTitleCharged.bind(this)}
              placeholder = ' Title:'
              autoCapitalize = 'none'/>
          <TextInput style = {styles.input}
              onChange = {this.onDepartCharged.bind(this)}
              placeholder = ' Department:'
              autoCapitalize = 'none'/>
          <TextInput style = {styles.input}
              onChange={this.onNumCharged.bind(this)}
              
              placeholder = ' Number of Speaker:'
              autoCapitalize = 'none'/>
        </View>
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.button}
            onPress={this.onStartPressed.bind(this)}
            underlayColor= '#99d9f4'>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>
        </View>
    </View>)
  }
}

module.exports = ActivityInfo; 