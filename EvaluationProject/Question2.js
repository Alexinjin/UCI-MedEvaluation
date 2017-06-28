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

var question3_1 = require('./Question3_1');

var styles = StyleSheet.create({
  container:{
    flex: 1,
    //alignItems:'center',
    flexDirection:'column',
    paddingTop:69,
    justifyContent:'space-between',
  },
  
  TextBox:{
    flex: 90,
    marginHorizontal: 10,
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
  },

  imageBox:{
    flex:8,
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
    paddingTop:10,
    paddingBottom: 10,
  },

  choiceText:{
    fontSize:14,
    color: 'black',
    textAlign: 'center',
  }

});

class Question2 extends Component{
    onNextPressed(){
      if (((this.yes1 || this.no1 || this.none1) &&
           (this.yes2 || this.no2 || this.none2) &&
           (this.yes3 || this.no3 || this.none3) &&
           (this.yes4 || this.no4 || this.none4)) == 1 ){
            if (this.yes1 != 0){
              this.result += 1000
            }
            else if (this.no1 != 0){
              this.result += 2000
            }
            else if (this.none1 != 0 ){
              this.result += 3000
            }

            if (this.yes2 != 0){
              this.result += 100
            }
            else if (this.no2 != 0){
              this.result += 200
            }
            else if (this.none2 != 0 ){
              this.result += 300
            }

            if (this.yes3 != 0){
              this.result += 10
            }
            else if (this.no3 != 0){
              this.result += 20
            }
            else if (this.none3 != 0 ){
              this.result += 30
            }

            if (this.yes4 != 0){
              this.result += 1
            }
            else if (this.no4 != 0){
              this.result += 2
            }
            else if (this.none4 != 0 ){
              this.result += 3
            }
            this.props.navigator.push({
              title: 'Question 3 #1',
              component: question3_1,
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
                resultQ1 : this.props.resultQ1,
                resultQ2 : this.result,
              }
            });
            this.result = 0
      }
    }

    constructor(props){
      super(props);
      this.yes1 = 0;
      this.no1 = 0;
      this.none1 = 0;
      this.yes2 = 0;
      this.no2= 0;
      this.none2 = 0;
      this.yes3 = 0;
      this.no3 = 0;
      this.none3 = 0;
      this.yes4 = 0;
      this.no4 = 0;
      this.none4 = 0;
      this.result = 0;
      this.state = {
        yes1: "white",
        no1: "white",
        none1: "white",
        yes2: "white",
        no2: "white",
        none2: "white",
        yes3: "white",
        no3: "white",
        none3: "white",
        yes4: "white",
        no4: "white",
        none4: "white",
        };
    }

    onButtonPress_yes1(){
      if(this.yes1 == 0){
          this.yes1 = 1
          this.no1 = 0;
          this.none1 = 0;
          this.setState({
          yes1: "#48BBEC",
          no1: "white",
          none1: "white",

          });
        }
      else{
          this.yes1 = 0;
          this.setState({
          yes1:"white",
          });
        }
    }

    onButtonPress_no1(){
      if(this.no1 == 0){
          this.yes1 = 0;
          this.no1 = 1;
          this.none1 = 0;
          this.setState({
          yes1: "white",
          no1: "#48BBEC",
          none1: "white",
          });
        }
      else{
          this.no1 = 0;
          this.setState({
          no1:"white",
          });
        }
    }

    onButtonPress_none1(){
      if(this.none1 == 0){
          this.yes1 = 0;
          this.no1 = 0;
          this.none1 = 1;
          this.setState({
          yes1: "white",
          no1: "white",
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

        onButtonPress_yes2(){
      if(this.yes2 == 0){
          this.yes2 = 1
          this.no2 = 0;
          this.none2 = 0;
          this.setState({
          yes2: "#48BBEC",
          no2: "white",
          none2: "white",

          });
        }
      else{
          this.yes2 = 0;
          this.setState({
          yes2:"white",
          });
        }
    }

    onButtonPress_no2(){
      if(this.no2 == 0){
          this.yes2 = 0;
          this.no2 = 1;
          this.none2 = 0;
          this.setState({
          yes2: "white",
          no2: "#48BBEC",
          none2: "white",
          });
        }
      else{
          this.no2 = 0;
          this.setState({
          no2:"white",
          });
        }
    }

    onButtonPress_none2(){
      if(this.none2 == 0){
          this.yes2 = 0;
          this.no2 = 0;
          this.none2 = 1;
          this.setState({
          yes2: "white",
          no2: "white",
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

        onButtonPress_yes3(){
      if(this.yes3 == 0){
          this.yes3 = 1
          this.no3 = 0;
          this.none3 = 0;
          this.setState({
          yes3: "#48BBEC",
          no3: "white",
          none3: "white",

          });
        }
      else{
          this.yes3 = 0;
          this.setState({
          yes3:"white",
          });
        }
    }

    onButtonPress_no3(){
      if(this.no3 == 0){
          this.yes3 = 0;
          this.no3 = 1;
          this.none3 = 0;
          this.setState({
          yes3: "white",
          no3: "#48BBEC",
          none3: "white",
          });
        }
      else{
          this.no3 = 0;
          this.setState({
          no3:"white",
          });
        }
    }

    onButtonPress_none3(){
      if(this.none3 == 0){
          this.yes3 = 0;
          this.no3 = 0;
          this.none3 = 1;
          this.setState({
          yes3: "white",
          no3: "white",
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

    onButtonPress_yes4(){
      if(this.yes4 == 0){
          this.yes4 = 1
          this.no4 = 0;
          this.none4 = 0;
          this.setState({
          yes4: "#48BBEC",
          no4: "white",
          none4: "white",

          });
        }
      else{
          this.yes4 = 0;
          this.setState({
          yes4:"white",
          });
        }
    }

    onButtonPress_no4(){
      if(this.no4 == 0){
          this.yes4 = 0;
          this.no4 = 1;
          this.none4 = 0;
          this.setState({
          yes4: "white",
          no4: "#48BBEC",
          none4: "white",
          });
        }
      else{
          this.no4 = 0;
          this.setState({
          no4:"white",
          });
        }
    }

    onButtonPress_none4(){
      if(this.none4 == 0){
          this.yes4 = 0;
          this.no4 = 0;
          this.none4 = 1;
          this.setState({
          yes4: "white",
          no4: "white",
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

            Did this event meet the objectives
            of this Grand Rounds series? {'\n'}
            Are you able to: {'\n'}
            </Text>

            <Text style={styles.subText}>
            1.  Distinguish the diagnosis and management of diseases
            and conditions encountered by ophthalmologists.
            </Text>

            <View style={styles.buttonList}>
              <TouchableHighlight style = {{ backgroundColor: this.state.yes1,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_yes1.bind(this)}>
                <Text style = {styles.choiceText}>
                  Yes
                </Text>
              </TouchableHighlight>

              <TouchableHighlight style = {{ backgroundColor: this.state.no1,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_no1.bind(this)}>
                <Text style = {styles.choiceText}>
                  No
                </Text>
              </TouchableHighlight>

              <TouchableHighlight style = {{ backgroundColor: this.state.none1,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_none1.bind(this)}>
                <Text style = {styles.choiceText}>

                  None
                </Text>
              </TouchableHighlight>
            </View>
            
            <Text style={styles.subText}>
            2.  Learn new surgical and therapeutic treatment of ophthalmic diseases
            to better manage complicated cases.
            </Text>

            <View style={styles.buttonList}>
              <TouchableHighlight style = {{ backgroundColor: this.state.yes2,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_yes2.bind(this)}>
                <Text style = {styles.choiceText}>
                  Yes
                </Text>
              </TouchableHighlight>

              <TouchableHighlight style = {{ backgroundColor: this.state.no2,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_no2.bind(this)}>
                <Text style = {styles.choiceText}>
                  No
                </Text>
              </TouchableHighlight>

              <TouchableHighlight style = {{ backgroundColor: this.state.none2,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_none2.bind(this)}>
                <Text style = {styles.choiceText}>
                  None
                </Text>
              </TouchableHighlight>
            </View>

            <Text style = {styles.subText}>
            3.  Cite current research findings in the field of ophthalmology 
            and critically analyze new landmark contributions in ophthalmology research.
            </Text>

            <View style={styles.buttonList}>
              <TouchableHighlight style = {{ backgroundColor: this.state.yes3,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_yes3.bind(this)}>
                <Text style = {styles.choiceText}>
                  Yes
                </Text>
              </TouchableHighlight>

              <TouchableHighlight style = {{ backgroundColor: this.state.no3,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_no3.bind(this)}>
                <Text style = {styles.choiceText}>
                  No
                </Text>
              </TouchableHighlight>

              <TouchableHighlight style = {{ backgroundColor: this.state.none3,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_none3.bind(this)}>
                <Text style = {styles.choiceText}>
                  None
                </Text>
              </TouchableHighlight>
            </View>

            <Text style = {styles.subText}>
            4.  Interpret the appropriate utilization, humanitarian implementation, 
            and respect patient privacy and the requirements for informed consenting.
            </Text>

            <View style={styles.buttonList}>
              <TouchableHighlight style = {{ backgroundColor: this.state.yes4,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_yes4.bind(this)}>
                <Text style = {styles.choiceText}>
                  Yes
                </Text>
              </TouchableHighlight>

              <TouchableHighlight style = {{ backgroundColor: this.state.no4,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_no4.bind(this)}>
                <Text style = {styles.choiceText}>
                  No
                </Text>
              </TouchableHighlight>

              <TouchableHighlight style = {{ backgroundColor: this.state.none4,
                                              borderWidth : 1,
                                              borderRadius : 10,
                                              borderColor: 'black',
                                              padding: 5,
                                              flex: 1,
                                              marginHorizontal: 15,
                                           }}
                onPress = {this.onButtonPress_none4.bind(this)}>
                <Text style = {styles.choiceText}>
                  None
                </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.buttonBox}>
              <TouchableHighlight style={styles.nextButton}
                onPress = {this.onNextPressed.bind(this)}
                underlayColor= '#99d9f4'>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>



      </View>)
    }
}

module.exports = Question2;
