'use strict';
import CheckBox from 'react-native-check-box'
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
  ScrollView,
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
    flex:1,
    marginHorizontal: 10,
    alignSelf:'flex-start',
  },
  text:{
    color: 'black',
    fontSize: 18,
    alignSelf: 'center',
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

  choiceButtonBox:{
    paddingLeft: 10,
    alignSelf:'flex-start',
    justifyContent: 'space-between',

  },
  choiceButtonNoPress:{
    // alignSelf:'flex-start',
    marginTop: 10,
    backgroundColor:'white',
    borderWidth: 1,
    borderColor:'black',
    borderRadius: 10,
    padding:5,
   },
});

class Question1 extends Component{

    constructor(props){
      super(props);
      this.excellent = 0;
      this.verygood = 0;
      this.fair = 0;
      this.poor = 0;
      this.state = {
        excellent_color: "white",
        verygood_color: "white",
        fair_color: "white",
        poor_color: "white",
        };
    }

    onButtonPress1(){
      if(this.excellent == 0){
          this.excellent = 1
          this.verygood = 0;
          this.fair = 0;
          this.poor = 0;
          this.setState({
          excellent_color: "#48BBEC",
          verygood_color: "white",
          fair_color: "white",
          poor_color: "white",
          });
        }
      else{
          this.excellent = 0;
          this.setState({
          excellent_color:"white",
          });
        }
    }

    onButtonPress2(){
      if(this.verygood == 0){
          this.excellent = 0;
          this.verygood = 1;
          this.fair = 0;
          this.poor = 0;
          this.setState({
          excellent_color: "white",
          verygood_color: "#48BBEC",
          fair_color: "white",
          poor_color: "white",
          });
        }
      else{
          this.verygood = 0;
          this.setState({
          verygood_color:"white",
          });
        }
    }

    onButtonPress3(){
      if(this.fair == 0){
          this.fair = 1;
          this.setState({
          excellent_color: "white",
          verygood_color: "white",
          fair_color: "#48BBEC",
          poor_color: "white",
          });
        }
      else{
          this.fair = 0;
          this.setState({
          fair_color:"white",
          });
        }
    }

    onButtonPress4(){
      if(this.poor == 0){
          this.poor = 1;
          this.setState({
          excellent_color: "white",
          verygood_color: "white",
          fair_color: "white",
          poor_color: "#48BBEC",
          });
        }
      else{
          this.poor = 0;
          this.setState({
          poor_color:"white",
          });
        }
    }



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
          <Text style={styles.text}>
            Overall evaluation of this event:
            </Text>
        </View>

        <View style = {styles.choiceButtonBox}>
          <TouchableHighlight style = {{backgroundColor: this.state.excellent_color,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor:'black',
                                        borderRadius: 10,
                                        padding:5}}
            onPress = {this.onButtonPress1.bind(this)}
            underlayColor= '#99d9f4'>

            <Text style = {styles.text}>
              Excellent
            </Text>
            </TouchableHighlight>

          <TouchableHighlight style = {{backgroundColor: this.state.verygood_color,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor:'black',
                                        borderRadius: 10,
                                        padding:5}}
            onPress = {this.onButtonPress2.bind(this)}>
            <Text style = {styles.text}>
              Very Good
            </Text>

          </TouchableHighlight>

          <TouchableHighlight style = {{backgroundColor: this.state.fair_color,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor:'black',
                                        borderRadius: 10,
                                        padding:5}}
            onPress = {this.onButtonPress3.bind(this)}>
            <Text style = {styles.text}>
              Fair
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style = {{backgroundColor: this.state.poor_color,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor:'black',
                                        borderRadius: 10,
                                        padding:5}}
            onPress = {this.onButtonPress4.bind(this)}>
            <Text style = {styles.text}>
              Poor
            </Text>
          </TouchableHighlight>


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
