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
    flex:3,
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
    fontSize: 18,
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
  choiceButtonBox:{
    padding: 10,
    alignSelf:'stretch',
    justifyContent: 'space-between',

  },

  chooseText:{
    fontSize:14,
    color: 'black',
    textAlign: 'center',
  },
});

class Question7 extends Component{
    constructor(props){
      super(props);
      this.sagree = 0;
      this.agree = 0;
      this.Neutral = 0;
      this.disagree = 0;
      this.sdisagree = 0;
      this.none = 0;
      this.result = 0;
      this.state = {
        sagree_color: "white",
        agree_color: "white",
        neutral_color: "white",
        disagree_color: "white",
        sdisagree_color: "white",
        none_color: "white"
        };
    }

    onButtonPress1(){
      if(this.sagree == 0){
          this.sagree = 1;
          this.agree = 0;
          this.Neutral = 0;
          this.disagree = 0;
          this.sdisagree = 0;
          this.none = 0;
          this.setState({
          sagree_color: "#48BBEC",
          agree_color: "white",
          neutral_color: "white",
          disagree_color: "white",
          sdisagree_color: "white",
          none_color: "white"
          });
        }
      else{
          this.sagree = 0;
          this.setState({
          sagree_color:"white",
          });
        }
    }

    onButtonPress2(){
      if(this.agree == 0){
          this.sagree = 0;
          this.agree = 2;
          this.Neutral = 0;
          this.disagree = 0;
          this.sdisagree = 0;
          this.none = 0;
          this.setState({
          sagree_color: "white",
          agree_color: "#48BBEC",
          neutral_color: "white",
          disagree_color: "white",
          sdisagree_color: "white",
          none_color: "white"
          });
        }
      else{
          this.agree = 0;
          this.setState({
          agree_color:"white",
          });
        }
    }

    onButtonPress3(){
      if(this. Neutral == 0){
          this.sagree = 0;
          this.agree = 0;
          this.Neutral = 3;
          this.disagree = 0;
          this.sdisagree = 0;
          this.none = 0;
          this.setState({
          sagree_color: "white",
          agree_color: "white",
          neutral_color: "#48BBEC",
          disagree_color: "white",
          sdisagree_color: "white",
          none_color: "white"
          });
        }
      else{
          this.Neutral = 0;
          this.setState({
          neutral_color:"white",
          });
        }
    }

    onButtonPress4(){
      if(this.disagree == 0){
          this.sagree = 0;
          this.agree = 0;
          this.Neutral = 0;
          this.disagree = 4;
          this.sdisagree = 0;
          this.none = 0;
          this.setState({
          sagree_color: "white",
          agree_color: "white",
          neutral_color: "white",
          disagree_color: "#48BBEC",
          sdisagree_color: "white",
          none_color: "white"
          });
        }
      else{
          this.disagree = 0;
          this.setState({
          disagree_color:"white",
          });
        }
    }
    onButtonPress5(){
      if(this.sdisagree == 0){
          this.sagree = 0;
          this.agree = 0;
          this.Neutral = 0;
          this.disagree = 0;
          this.sdisagree = 5;
          this.none = 0;
          this.setState({
          sagree_color: "white",
          agree_color: "white",
          neutral_color: "white",
          disagree_color: "white",
          sdisagree_color: "#48BBEC",
          none_color: "white"
          });
        }
      else{
          this.sdisagree = 0;
          this.setState({
          sdisagree_color:"white",
          });
        }
    }

    onButtonPress6(){
      if(this.none == 0){
          this.sagree = 0;
          this.agree = 0;
          this.Neutral = 0;
          this.disagree = 0;
          this.sdisagree = 0;
          this.none = 6;
          this.setState({
          sagree_color: "white",
          agree_color: "white",
          neutral_color: "white",
          disagree_color: "white",
          sdisagree_color: "white",
          none_color: "#48BBEC"
          });
        }
      else{
          this.none = 0;
          this.setState({
          none_color:"white",
          });
        }
    }


    onButtonPress(){
      if ((this.sagree || this.agree || this.Neutral || this.disagree || this.sdisagree || this.none) != 0){
        this.result = this.sagree + this.agree + this.Neutral + this.disagree + this.sdisagree + this.none
        this.props.navigator.push({
        title: "Question 8",
        component: question8,
        passProps:{
          resultQ1: this.props.resultQ1,
          resultQ2: this.props.resultQ2,
          resultQ3: this.props.resultQ3,
          resultQ4: this.props.resultQ4,
          resultQ5: this.props.resultQ5,
          resultQ6: this.props.resultQ6,
          resultQ7: this.result
          }
        });
      }
    }

    render(){
    return(
      <View style={styles.container}>
       <View style={styles.imageBox}>
            <Image source={require('./Resources/title.png')}
                style={styles.imagetitle}/>
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.title}>
            Issues in cultural and linguistic competency (e.g. differences in prevalence, diagnosis, 
            treatment in diverse populations, linguistic skills, pertinent cultural data) were adequately
            addressed in this activity: {'\n\n'}

            </Text>
        </View>
                <View style = {styles.choiceButtonBox}>
          <TouchableHighlight style = {{backgroundColor: this.state.sagree_color,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor:'black',
                                        borderRadius: 10,
                                        padding:5}}
            onPress = {this.onButtonPress1.bind(this)}
            underlayColor= '#99d9f4'>

            <Text style = {styles.chooseText}>
              Strongly Agree
            </Text>
            </TouchableHighlight>

          <TouchableHighlight style = {{backgroundColor: this.state.agree_color,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor:'black',
                                        borderRadius: 10,
                                        padding:5}}
            onPress = {this.onButtonPress2.bind(this)}>
            <Text style = {styles.chooseText}>
              Agree
            </Text>

          </TouchableHighlight>

          <TouchableHighlight style = {{backgroundColor: this.state.neutral_color,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor:'black',
                                        borderRadius: 10,
                                        padding:5}}
            onPress = {this.onButtonPress3.bind(this)}>
            <Text style = {styles.chooseText}>
              Neutral
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style = {{backgroundColor: this.state.disagree_color,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor:'black',
                                        borderRadius: 10,
                                        padding:5}}
            onPress = {this.onButtonPress4.bind(this)}>
            <Text style = {styles.chooseText}>
              Disagree
            </Text>
          </TouchableHighlight>


        
        <TouchableHighlight style = {{backgroundColor: this.state.sdisagree_color,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor:'black',
                                        borderRadius: 10,
                                        padding:5}}
            onPress = {this.onButtonPress5.bind(this)}>
            <Text style = {styles.chooseText}>
              Strongly Disagree
            </Text>
          </TouchableHighlight>


        
        <TouchableHighlight style = {{backgroundColor: this.state.none_color,
                                        marginTop: 10,
                                        borderWidth: 1,
                                        borderColor:'black',
                                        borderRadius: 10,
                                        padding:5}}
            onPress = {this.onButtonPress6.bind(this)}>
            <Text style = {styles.chooseText}>
              None
            </Text>
          </TouchableHighlight>


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
