import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import image from "../assets/background.jpg";
export class ResultBox extends Component {
  render() {
    return <Text style={styles.ResultBox}>{this.props.result} </Text>;
  }
}

export default ResultBox;
const styles = StyleSheet.create({
  ResultBox: {
    flex: 1,
    textAlign: "right",
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 30,
    paddingBottom: 30,
  },
});
