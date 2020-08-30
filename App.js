import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform } from "react-native";
import ExpressionBox from "./components/ExpressionBox";
import ResultBox from "./components/ResultBox";
import NumPad from "./components/NumPad";
const  math     = require('mathjs');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      result: "",
      lastexpression: [],
    };
  }
  _assembleExpression = (symbol) => {
    this.setState((prevState) => ({
      lastexpression: [...prevState.lastexpression, prevState.expression],
      expression: prevState.expression + symbol,
    }));
  };

  calculateResult = () => {
    let result;
    try {
      result = math.evaluate(this.state.expression);
    } catch (err) {
      console.log(err);
      result = "Error";
    }
    this.setState({
      result: result,
    });
  };

  clearexpression=()=>{
    this.setState((prevState) => ({
      lastexpression: [],
      expression: '',
      result:''
    }));
  }

  rollbackExpression = () => {
    this.state.expression &&
      this.setState((prevState) => ({
        expression: prevState.lastexpression.pop(),
        lastexpression: prevState.lastexpression,
        result:''
      }));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ExpressionBox expression={this.state.expression} />
        <ResultBox result={this.state.result} />
        <NumPad
          assembleExpression={this._assembleExpression}
          calculateResult={this.calculateResult}
          deletePressed={this.rollbackExpression}
          clearexpression={this.clearexpression}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    paddingTop: 30,
  },
});
