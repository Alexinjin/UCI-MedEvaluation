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

var lastpage = require('./LastPage');

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
    marginHorizontal:10,
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
    fontSize: 16,
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

class Question8 extends Component{
    onButtonPress(){
        this.props.navigator.push({
        title: "Compelete",
        component: lastpage,
        passProps:{
        resultQ1: this.props.resultQ1,
        resultQ2: this.props.resultQ2,
        resultQ3: this.props.resultQ3,
        resultQ4: this.props.resultQ4,
        resultQ5: this.props.resultQ5,
        resultQ6: this.props.resultQ6,
        resultQ7: this.props.resultQ7,
        resultQ8: this.state.result
        }
      });
    }

    constructor(props){
      super(props);
      this.state = {result:''};
    }

    render(){
    return(
     <View style={styles.container}>
        <View style={styles.imageBox}>
            <Image source={require('./Resources/title.png')}
                style={styles.titleImage}/>
        </View>


        <Text style={styles.text}>
            Resources on cultural and lingusitic competency have been included in your materials. 
            How can we further meet educational needs in this area?{'\n'}
        </Text>
        <View style={styles.inputBox}>
          <TextInput style = {styles.input}
            multiline = {true}
            numberOfLine = {4}
            onChangeText = {(result) => this.setState({result})}
            autoCapitalize = 'none'/>
        </View>
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.button}
          onPress = {() => this.onButtonPress()} 
            underlayColor= '#99d9f4'>
            <Text style={styles.buttonText}>Sumbit</Text>
          </TouchableHighlight>
        </View>
      </View>)
    }
}

module.exports = Question8;
