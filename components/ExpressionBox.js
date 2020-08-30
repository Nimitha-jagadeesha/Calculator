import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export class ExpressionBox extends Component {
  render() {
    return <Text style={styles.expressionbox}>{this.props.expression}</Text>;
  }
}

export default ExpressionBox;
const styles = StyleSheet.create({
  expressionbox: {
    flex: 1,
    textAlign: "right",
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 35,
    paddingTop:10,
    paddingBottom: 30,
  },
});
