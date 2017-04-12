'use strict'
var React = require('react');
var ReactNative = require('react-native');
var Start = require('./Start');

var styles = ReactNative.StyleSheet.create({
  text:{
    color: 'black',
    backgroundColor:'white',
    fontSize: 30,
    margin: 80
  },
  container:{
    flex: 1
  }
});

class EvaluationProject extends React.Component{
  render(){
    return (
      <ReactNative.NavigatorIOS
      style = {styles.container}
      initialRoute={{
        title: 'Evaluation',
        component: Start,
      }}/>);
  }
}




ReactNative.AppRegistry.registerComponent('EvaluationProject',function(){return EvaluationProject});