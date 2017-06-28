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
  ScrollView,
} from 'react-native';

var question4 = require('./Question4');
var question3_2 = require('./Question3_2');

var styles = StyleSheet.create({
    container:{
    flex: 1,
    // alignItems:'center',
    flexDirection:'column',
    paddingTop:69,
    // justifyContent:'space-between',
  },
  
  TextBox:{
    marginHorizontal: 10,
    flex: 100,
  },

  title:{
    color: 'black',
    backgroundColor: 'white',
    fontSize: 20,

  },
  subText:{
    color: 'black',
    backgroundColor: 'white',
    fontSize: 16,
    paddingTop:5,
  },
  imageBox:{
    flex: 8,
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
    flex:1,
    paddingBottom: 20,
    alignSelf:'stretch',
    marginHorizontal: 30,
    marginTop: 10,
  },
  buttonText:{
    fontSize:14,
    color: 'white',
    textAlign: 'center',
  },
  nextButton:{
    backgroundColor:'#48BBEC',
    borderColor:'#48BBEC',
    borderRadius: 10,
    alignSelf:'stretch',
    padding:14,
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonList:{
    flexDirection: "row",
    paddingTop:5,
  },

  choiceText:{
    fontSize:14,
    color: 'black',
    textAlign: 'center',
  },
});

class Question3_1 extends Component{
    onButtonPress(){
      if ((
        (this.excellent1 || this.verygood1 || this.good1 || this.fair1 || this.poor1 || this.none1) &&
        (this.excellent2 || this.verygood2 || this.good2 || this.fair2 || this.poor2 || this.none2) &&
        (this.excellent3 || this.verygood3 || this.good3 || this.fair3 || this.poor3 || this.none3) &&
        (this.excellent4 || this.verygood4 || this.good4 || this.fair4 || this.poor4 || this.none4) &&
        (this.excellent5 || this.verygood5 || this.good5 || this.fair5 || this.poor5 || this.none5) ) != 0)
      {
        this.result += (this.excellent1 + this.verygood1 + this.good1 + this.fair1 + this.poor1 + this.none1) * 10000
        this.result += (this.excellent2 + this.verygood2 + this.good2 + this.fair2 + this.poor2 + this.none2) * 1000
        this.result += (this.excellent3 + this.verygood3 + this.good3 + this.fair3 + this.poor3 + this.none3) * 100
        this.result += (this.excellent4 + this.verygood4 + this.good4 + this.fair4 + this.poor4 + this.none4) * 10
        this.result += (this.excellent5 + this.verygood5 + this.good5 + this.fair5 + this.poor5 + this.none5) * 1



        if (this.props.numOfSpeaker == 1){
          this.props.navigator.push({
          title: "Question4",
          component: question4,
          passProps:{
            password: this.props.password,
            numOfSpeaker : this.props.numOfSpeaker,
            name1 : this.props.name1,
            topic1 : this.props.topic1,
            resultQ1: this.props.resultQ1,
            resultQ2: this.props.resultQ2,
            resultQ3: this.result,

            }
          });
        }
        else{
          this.props.navigator.push({
            title: "Question3 #2",
            component: question3_2,
            passProps:{
              password: this.props.password,
              numOfSpeaker : this.props.numOfSpeaker,
              name1 : this.props.name1,
              topic1 : this.props.topic1,
              name2 : this.props.name2,
              topic2 : this.props.topic2,
              name3 : this.props.name3,
              topic3 : this.props.topic3,
              name4 : this.props.name4,
              topic4 : this.props.topic4,
              name5 : this.props.name5,
              topic5 : this.props.topic5,
              resultQ1: this.props.resultQ1,
              resultQ2: this.props.resultQ2,
              resultQ3: this.result,
            }
          });
        }
        this.result = 0
      }
    }

    constructor(props){
      super(props);
      this.excellent1 = 0;
      this.verygood1 = 0;
      this.good1 = 0;
      this.fair1 = 0;
      this.poor1 = 0;
      this.none1 = 0;

      this.excellent2 = 0;
      this.verygood2 = 0;
      this.good2 = 0;
      this.fair2 = 0;
      this.poor2 = 0;
      this.none2 = 0;

      this.excellent3 = 0;
      this.verygood3 = 0;
      this.good3 = 0;
      this.fair3 = 0;
      this.poor3 = 0;
      this.none3 = 0;

      this.excellent4 = 0;
      this.verygood4 = 0;
      this.good4 = 0;
      this.fair4 = 0;
      this.poor4 = 0;
      this.none4 = 0;

      this.excellent5 = 0;
      this.verygood5 = 0;
      this.good5 = 0;
      this.fair5 = 0;
      this.poor5 = 0;
      this.none5 = 0;

      this.result = 0;
      this.state = {
        excellent1: "white",
        verygood1: "white",
        good1: "white",
        fair1: "white",
        poor1: "white",
        none1: "white",

        excellent2: "white",
        verygood2: "white",
        good2: "white",
        fair2: "white",
        poor2: "white",
        none2: "white",

        excellent3: "white",
        verygood3: "white",
        good3: "white",
        fair3: "white",
        poor3: "white",
        none3: "white",

        excellent4: "white",
        verygood4: "white",
        good4: "white",
        fair4: "white",
        poor4: "white",
        none4: "white",

        excellent5: "white",
        verygood5: "white",
        good5: "white",
        fair5: "white",
        poor5: "white",
        none5: "white",
        };
    }

    onButtonPress_excellent1(){
      if(this.excellent1 == 0){
          this.excellent1 = 1
          this.verygood1 = 0;
          this.good1 = 0;
          this.fair1 = 0;
          this.poor1 = 0;
          this.none1 = 0;
          this.setState({
          excellent1: "#48BBEC",
          verygood1: "white",
          good1: "white",
          fair1: "white",
          poor1: "white",
          none1: "white",
          });
        }
      else{
          this.excellent1 = 0;
          this.setState({
          excellent1:"white",
          });
        }
    }

    onButtonPress_verygood1(){
      if(this.verygood1 == 0){
          this.excellent1 = 0;
          this.verygood1 = 2;
          this.good1 = 0;
          this.fair1 = 0;
          this.poor1 = 0;
          this.none1 = 0;
          this.setState({
          excellent1: "white",
          verygood1: "#48BBEC",
          good1: "white",
          fair1: "white",
          poor1: "white",
          none1: "white",
          });
        }
      else{
          this.verygood1 = 0;
          this.setState({
          verygood1:"white",
          });
        }
    }

    onButtonPress_good1(){
      if(this.good1 == 0){
          this.excellent1 = 0;
          this.verygood1 = 0;
          this.good1 = 3;
          this.fair1 = 0;
          this.poor1 = 0;
          this.none1 = 0;
          this.setState({
          excellent1: "white",
          verygood1: "white",
          good1: "#48BBEC",
          fair1: "white",
          poor1: "white",
          none1: "white",
          });
        }
      else{
          this.good1 = 0;
          this.setState({
          good1:"white",
          });
        }
    }

  

    onButtonPress_fair1(){
      if(this.fair1 == 0){
          this.excellent1 = 0;
          this.verygood1 = 0;
          this.good1 = 0;
          this.fair1 = 4;
          this.poor1 = 0;
          this.none1 = 0;
          this.setState({
          excellent1: "white",
          verygood1: "white",
          good1: "white",
          fair1: "#48BBEC",
          poor1: "white",
          none1: "white",
          });
        }
      else{
          this.fair1 = 0;
          this.setState({
          fair1:"white",
          });
        }
    }

    onButtonPress_poor1(){
      if(this.poor1 == 0){
          this.excellent1 = 0;
          this.verygood1 = 0;
          this.good1 = 0;
          this.fair1 = 0;
          this.poor1 = 5;
          this.none1 = 0;
          this.setState({
          excellent1: "white",
          verygood1: "white",
          good1: "white",
          fair1: "white",
          poor1: "#48BBEC",
          none1: "white",
          });
        }
      else{
          this.poor1 = 0;
          this.setState({
          poor1:"white",
          });
        }
    }

    onButtonPress_none1(){
      if(this.none1 == 0){
          this.excellent1 = 0;
          this.verygood1 = 0;
          this.good1 = 0;
          this.fair1 = 0;
          this.poor1 = 0;
          this.none1 = 6;
          this.setState({
          excellent1: "white",
          verygood1: "white",
          good1: "white",
          fair1: "white",
          poor1: "white",
          none1: "#48BBEC",
          });
        }
      else{
          this.none1 = 0;
          this.setState({
          none1:"white",
          });
        }
    }


    onButtonPress_excellent2(){
      if(this.excellent2 == 0){
          this.excellent2 = 1
          this.verygood2 = 0;
          this.good2 = 0;
          this.fair2 = 0;
          this.poor2 = 0;
          this.none2 = 0;
          this.setState({
          excellent2: "#48BBEC",
          verygood2: "white",
          good2: "white",
          fair2: "white",
          poor2: "white",
          none2: "white",
          });
        }
      else{
          this.excellent2 = 0;
          this.setState({
          excellent2:"white",
          });
        }
    }

    onButtonPress_verygood2(){
      if(this.verygood2 == 0){
          this.excellent2 = 0;
          this.verygood2 = 2;
          this.good2 = 0;
          this.fair2 = 0;
          this.poor2 = 0;
          this.none2 = 0;
          this.setState({
          excellent2: "white",
          verygood2: "#48BBEC",
          good2: "white",
          fair2: "white",
          poor2: "white",
          none2: "white",
          });
        }
      else{
          this.verygood2 = 0;
          this.setState({
          verygood2:"white",
          });
        }
    }

    onButtonPress_good2(){
      if(this.good2 == 0){
          this.excellent2 = 0;
          this.verygood2 = 0;
          this.good2 = 3;
          this.fair2 = 0;
          this.poor2 = 0;
          this.none2 = 0;
          this.setState({
          excellent2: "white",
          verygood2: "white",
          good2: "#48BBEC",
          fair2: "white",
          poor2: "white",
          none2: "white",
          });
        }
      else{
          this.good2 = 0;
          this.setState({
          good2:"white",
          });
        }
    }

  

    onButtonPress_fair2(){
      if(this.fair2 == 0){
          this.excellent2 = 0;
          this.verygood2 = 0;
          this.good2 = 0;
          this.fair2 = 4;
          this.poor2 = 0;
          this.none2 = 0;
          this.setState({
          excellent2: "white",
          verygood2: "white",
          good2: "white",
          fair2: "#48BBEC",
          poor2: "white",
          none2: "white",
          });
        }
      else{
          this.fair2 = 0;
          this.setState({
          fair2:"white",
          });
        }
    }

    onButtonPress_poor2(){
      if(this.poor2 == 0){
          this.excellent2 = 0;
          this.verygood2 = 0;
          this.good2 = 0;
          this.fair2 = 0;
          this.poor2 = 5;
          this.none2 = 0;
          this.setState({
          excellent2: "white",
          verygood2: "white",
          good2: "white",
          fair2: "white",
          poor2: "#48BBEC",
          none2: "white",
          });
        }
      else{
          this.poor2 = 0;
          this.setState({
          poor2:"white",
          });
        }
    }

    onButtonPress_none2(){
      if(this.none2 == 0){
          this.excellent2 = 0;
          this.verygood2 = 0;
          this.good2 = 0;
          this.fair2 = 0;
          this.poor2 = 0;
          this.none2 = 6;
          this.setState({
          excellent2: "white",
          verygood2: "white",
          good2: "white",
          fair2: "white",
          poor2: "white",
          none2: "#48BBEC",
          });
        }
      else{
          this.none2 = 0;
          this.setState({
          none2:"white",
          });
        }
    }


    onButtonPress_excellent3(){
      if(this.excellent3 == 0){
          this.excellent3 = 1
          this.verygood3 = 0;
          this.good3 = 0;
          this.fair3 = 0;
          this.poor3 = 0;
          this.none3 = 0;
          this.setState({
          excellent3: "#48BBEC",
          verygood3: "white",
          good3: "white",
          fair3: "white",
          poor3: "white",
          none3: "white",
          });
        }
      else{
          this.excellent3 = 0;
          this.setState({
          excellent3:"white",
          });
        }
    }

    onButtonPress_verygood3(){
      if(this.verygood3 == 0){
          this.excellent3 = 0;
          this.verygood3 = 2;
          this.good3 = 0;
          this.fair3 = 0;
          this.poor3 = 0;
          this.none3 = 0;
          this.setState({
          excellent3: "white",
          verygood3: "#48BBEC",
          good3: "white",
          fair3: "white",
          poor3: "white",
          none3: "white",
          });
        }
      else{
          this.verygood3 = 0;
          this.setState({
          verygood3:"white",
          });
        }
    }

    onButtonPress_good3(){
      if(this.good3 == 0){
          this.excellent3 = 0;
          this.verygood3 = 0;
          this.good3 = 3;
          this.fair3 = 0;
          this.poor3 = 0;
          this.none3 = 0;
          this.setState({
          excellent3: "white",
          verygood3: "white",
          good3: "#48BBEC",
          fair3: "white",
          poor3: "white",
          none3: "white",
          });
        }
      else{
          this.good3 = 0;
          this.setState({
          good3:"white",
          });
        }
    }

  

    onButtonPress_fair3(){
      if(this.fair3 == 0){
          this.excellent3 = 0;
          this.verygood3 = 0;
          this.good3 = 0;
          this.fair3 = 4;
          this.poor3 = 0;
          this.none3 = 0;
          this.setState({
          excellent3: "white",
          verygood3: "white",
          good3: "white",
          fair3: "#48BBEC",
          poor3: "white",
          none3: "white",
          });
        }
      else{
          this.fair3 = 0;
          this.setState({
          fair3:"white",
          });
        }
    }

    onButtonPress_poor3(){
      if(this.poor3 == 0){
          this.excellent3 = 0;
          this.verygood3 = 0;
          this.good3 = 0;
          this.fair3 = 0;
          this.poor3 = 5;
          this.none3 = 0;
          this.setState({
          excellent3: "white",
          verygood3: "white",
          good3: "white",
          fair3: "white",
          poor3: "#48BBEC",
          none3: "white",
          });
        }
      else{
          this.poor3 = 0;
          this.setState({
          poor3:"white",
          });
        }
    }

    onButtonPress_none3(){
      if(this.none3 == 0){
          this.excellent3 = 0;
          this.verygood3 = 0;
          this.good3 = 0;
          this.fair3 = 0;
          this.poor3 = 0;
          this.none3 = 6;
          this.setState({
          excellent3: "white",
          verygood3: "white",
          good3: "white",
          fair3: "white",
          poor3: "white",
          none3: "#48BBEC",
          });
        }
      else{
          this.none3 = 0;
          this.setState({
          none3:"white",
          });
        }
    }

    onButtonPress_excellent4(){
      if(this.excellent4 == 0){
          this.excellent4 = 1
          this.verygood4 = 0;
          this.good4 = 0;
          this.fair4 = 0;
          this.poor4 = 0;
          this.none4 = 0;
          this.setState({
          excellent4: "#48BBEC",
          verygood4: "white",
          good4: "white",
          fair4: "white",
          poor4: "white",
          none4: "white",
          });
        }
      else{
          this.excellent4 = 0;
          this.setState({
          excellent4:"white",
          });
        }
    }

    onButtonPress_verygood4(){
      if(this.verygood4 == 0){
          this.excellent4 = 0;
          this.verygood4 = 2;
          this.good4 = 0;
          this.fair4 = 0;
          this.poor4 = 0;
          this.none4 = 0;
          this.setState({
          excellent4: "white",
          verygood4: "#48BBEC",
          good4: "white",
          fair4: "white",
          poor4: "white",
          none4: "white",
          });
        }
      else{
          this.verygood4 = 0;
          this.setState({
          verygood4:"white",
          });
        }
    }

    onButtonPress_good4(){
      if(this.good4 == 0){
          this.excellent4 = 0;
          this.verygood4 = 0;
          this.good4 = 3;
          this.fair4 = 0;
          this.poor4 = 0;
          this.none4 = 0;
          this.setState({
          excellent4: "white",
          verygood4: "white",
          good4: "#48BBEC",
          fair4: "white",
          poor4: "white",
          none4: "white",
          });
        }
      else{
          this.good4 = 0;
          this.setState({
          good4:"white",
          });
        }
    }

  

    onButtonPress_fair4(){
      if(this.fair4 == 0){
          this.excellent4 = 0;
          this.verygood4 = 0;
          this.good4 = 0;
          this.fair4 = 4;
          this.poor4 = 0;
          this.none4 = 0;
          this.setState({
          excellent4: "white",
          verygood4: "white",
          good4: "white",
          fair4: "#48BBEC",
          poor4: "white",
          none4: "white",
          });
        }
      else{
          this.fair4 = 0;
          this.setState({
          fair4:"white",
          });
        }
    }

    onButtonPress_poor4(){
      if(this.poor4 == 0){
          this.excellent4 = 0;
          this.verygood4 = 0;
          this.good4 = 0;
          this.fair4 = 0;
          this.poor4 = 5;
          this.none4 = 0;
          this.setState({
          excellent4: "white",
          verygood4: "white",
          good4: "white",
          fair4: "white",
          poor4: "#48BBEC",
          none4: "white",
          });
        }
      else{
          this.poor4 = 0;
          this.setState({
          poor4:"white",
          });
        }
    }

    onButtonPress_none4(){
      if(this.none4 == 0){
          this.excellent4 = 0;
          this.verygood4 = 0;
          this.good4 = 0;
          this.fair4 = 0;
          this.poor4 = 0;
          this.none4 = 6;
          this.setState({
          excellent4: "white",
          verygood4: "white",
          good4: "white",
          fair4: "white",
          poor4: "white",
          none4: "#48BBEC",
          });
        }
      else{
          this.none4 = 0;
          this.setState({
          none4:"white",
          });
        }
    }

    onButtonPress_excellent5(){
      if(this.excellent5 == 0){
          this.excellent5 = 1
          this.verygood5 = 0;
          this.good5 = 0;
          this.fair5 = 0;
          this.poor5 = 0;
          this.none5 = 0;
          this.setState({
          excellent5: "#48BBEC",
          verygood5: "white",
          good5: "white",
          fair5: "white",
          poor5: "white",
          none5: "white",
          });
        }
      else{
          this.excellent5 = 0;
          this.setState({
          excellent5:"white",
          });
        }
    }

    onButtonPress_verygood5(){
      if(this.verygood5 == 0){
          this.excellent5 = 0;
          this.verygood5 = 2;
          this.good5 = 0;
          this.fair5 = 0;
          this.poor5 = 0;
          this.none5 = 0;
          this.setState({
          excellent5: "white",
          verygood5: "#48BBEC",
          good5: "white",
          fair5: "white",
          poor5: "white",
          none5: "white",
          });
        }
      else{
          this.verygood5 = 0;
          this.setState({
          verygood5:"white",
          });
        }
    }

    onButtonPress_good5(){
      if(this.good5 == 0){
          this.excellent5 = 0;
          this.verygood5 = 0;
          this.good5 = 3;
          this.fair5 = 0;
          this.poor5 = 0;
          this.none5 = 0;
          this.setState({
          excellent5: "white",
          verygood5: "white",
          good5: "#48BBEC",
          fair5: "white",
          poor5: "white",
          none5: "white",
          });
        }
      else{
          this.good5 = 0;
          this.setState({
          good5:"white",
          });
        }
    }

  

    onButtonPress_fair5(){
      if(this.fair5 == 0){
          this.excellent5 = 0;
          this.verygood5 = 0;
          this.good5 = 0;
          this.fair5 = 4;
          this.poor5 = 0;
          this.none5 = 0;
          this.setState({
          excellent5: "white",
          verygood5: "white",
          good5: "white",
          fair5: "#48BBEC",
          poor5: "white",
          none5: "white",
          });
        }
      else{
          this.fair5 = 0;
          this.setState({
          fair5:"white",
          });
        }
    }

    onButtonPress_poor5(){
      if(this.poor5 == 0){
          this.excellent5 = 0;
          this.verygood5 = 0;
          this.good5 = 0;
          this.fair5 = 0;
          this.poor5 = 5;
          this.none5 = 0;
          this.setState({
          excellent5: "white",
          verygood5: "white",
          good5: "white",
          fair5: "white",
          poor5: "#48BBEC",
          none5: "white",
          });
        }
      else{
          this.poor5 = 0;
          this.setState({
          poor5:"white",
          });
        }
    }

    onButtonPress_none5(){
      if(this.none5 == 0){
          this.excellent5 = 0;
          this.verygood5 = 0;
          this.good5 = 0;
          this.fair5 = 0;
          this.poor5 = 0;
          this.none5 = 6;
          this.setState({
          excellent5: "white",
          verygood5: "white",
          good5: "white",
          fair5: "white",
          poor5: "white",
          none5: "#48BBEC",
          });
        }
      else{
          this.none5 = 0;
          this.setState({
          none5:"white",
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
        <ScrollView automaticallyAdjustContentInsets={false}>
          <Text style={styles.title}>
            Please rate the speaker(s) and write constructive suggestions to aid
            the speaker in future presentations: {'\n\n'}
            Speaker : {this.props.name1} {'\n'}
            Topic : {this.props.topic1} {'\n'}
          </Text>

          <Text style={styles.subText}>
            1.  Delivery
          </Text>

          <View style={styles.buttonList}>
            <TouchableHighlight style = {{ backgroundColor: this.state.excellent1,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
              onPress = {this.onButtonPress_excellent1.bind(this)}>
              <Text style = {styles.choiceText}>
                Excellent
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.verygood1,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_verygood1.bind(this)}>
              <Text style = {styles.choiceText}>
                Very Good
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.good1,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_good1.bind(this)}>
              <Text style = {styles.choiceText}>
                Good
              </Text>
            </TouchableHighlight>

          </View>

          <View style={styles.buttonList}>

            <TouchableHighlight style = {{ backgroundColor: this.state.fair1,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_fair1.bind(this)}>
              <Text style = {styles.choiceText}>
                Fair
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.poor1,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_poor1.bind(this)}>
              <Text style = {styles.choiceText}>
                Poor
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.none1,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_none1.bind(this)}>
              <Text style = {styles.choiceText}>
                None
              </Text>
            </TouchableHighlight>

          </View>

          <Text style={styles.subText}>
            2.  Content
          </Text>

          <View style={styles.buttonList}>
            <TouchableHighlight style = {{ backgroundColor: this.state.excellent2,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_excellent2.bind(this)}>
              <Text style = {styles.choiceText}>
                Excellent
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.verygood2,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_verygood2.bind(this)}>
              <Text style = {styles.choiceText}>
                Very Good
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.good2,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_good2.bind(this)}>
              <Text style = {styles.choiceText}>
                Good
              </Text>
            </TouchableHighlight>

          </View>

          <View style={styles.buttonList}>

            <TouchableHighlight style = {{ backgroundColor: this.state.fair2,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_fair2.bind(this)}>
              <Text style = {styles.choiceText}>
                Fair
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.poor2,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_poor2.bind(this)}>
              <Text style = {styles.choiceText}>
                Poor
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.none2,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_none2.bind(this)}>
              <Text style = {styles.choiceText}>
                None
              </Text>
            </TouchableHighlight>

          </View>

          <Text style={styles.subText}>
            3.  Slides/Handouts
          </Text>

          <View style={styles.buttonList}>
            <TouchableHighlight style = {{ backgroundColor: this.state.excellent3,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_excellent3.bind(this)}>
              <Text style = {styles.choiceText}>
                Excellent
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.verygood3,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_verygood3.bind(this)}>
              <Text style = {styles.choiceText}>
                Very Good
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.good3,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_good3.bind(this)}>
              <Text style = {styles.choiceText}>
                Good
              </Text>
            </TouchableHighlight>

          </View>

          <View style={styles.buttonList}>

            <TouchableHighlight style = {{ backgroundColor: this.state.fair3,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_fair3.bind(this)}>
              <Text style = {styles.choiceText}>
                Fair
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.poor3,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_poor3.bind(this)}>
              <Text style = {styles.choiceText}>
                Poor
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.none3,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_none3.bind(this)}>
              <Text style = {styles.choiceText}>
                None
              </Text>
            </TouchableHighlight>

          </View>

          <Text style={styles.subText}>
            4.  Practical Value
          </Text>

          <View style={styles.buttonList}>
            <TouchableHighlight style = {{ backgroundColor: this.state.excellent4,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_excellent4.bind(this)}>
              <Text style = {styles.choiceText}>
                Excellent
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.verygood4,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_verygood4.bind(this)}>
              <Text style = {styles.choiceText}>
                Very Good
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.good4,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_good4.bind(this)}>
              <Text style = {styles.choiceText}>
                Good
              </Text>
            </TouchableHighlight>

          </View>

          <View style={styles.buttonList}>

            <TouchableHighlight style = {{ backgroundColor: this.state.fair4,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_fair4.bind(this)}>

              <Text style = {styles.choiceText}>
                Fair
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.poor4,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_poor4.bind(this)}>
              <Text style = {styles.choiceText}>
                Poor
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.none4,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_none4.bind(this)}>
              <Text style = {styles.choiceText}>
                None
              </Text>
            </TouchableHighlight>

          </View>

          <Text style={styles.subText}>
            5.  Was there a bias in this presentation?
          </Text>

          <View style={styles.buttonList}>
            <TouchableHighlight style = {{ backgroundColor: this.state.excellent5,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_excellent5.bind(this)}>
              <Text style = {styles.choiceText}>
                Excellent
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.verygood5,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_verygood5.bind(this)}>
              <Text style = {styles.choiceText}>
                Very Good
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.good5,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_good5.bind(this)}>
              <Text style = {styles.choiceText}>
                Good
              </Text>
            </TouchableHighlight>

          </View>

          <View style={styles.buttonList}>

            <TouchableHighlight style = {{ backgroundColor: this.state.fair5,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_fair5.bind(this)}>
              <Text style = {styles.choiceText}>
                Fair
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.poor5,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_poor5.bind(this)}>
              <Text style = {styles.choiceText}>
                Poor
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style = {{ backgroundColor: this.state.none5,
                                            borderWidth : 1,
                                            borderRadius : 10,
                                            borderColor: 'black',
                                            padding: 5,
                                            flex: 1,
                                            marginHorizontal: 10,
                                         }}
                                         onPress = {this.onButtonPress_none5.bind(this)}>
              <Text style = {styles.choiceText}>
                None
              </Text>
            </TouchableHighlight>

          </View>

          <View style={styles.buttonBox}>
            <TouchableHighlight style={styles.nextButton}
              onPress = {() => this.onButtonPress()} 
              underlayColor= '#99d9f4'>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableHighlight>

          </View>
            </ScrollView>
        </View>

      </View>)
    }
}

module.exports = Question3_1;
