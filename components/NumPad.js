import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import Key from "./key";
import image from "../assets/keypad.jpg";
export default class NumPad extends Component {
  echoSymbol = (symbol) => {
    if (symbol === "=") {
      this.props.calculateResult();
    } else if (symbol === "DEL") {
      this.props.deletePressed();
    } 
    else if(symbol=='CLR'){
      this.props.clearexpression();
    }
    else {
      this.props.assembleExpression(symbol);
    }
  };

  render() {
    return (
      <ImageBackground source={image} style={styles.keypad}>
        <View style={styles.numgroup}>
          <Key symbol="1" echoSymbol={this.echoSymbol} />
          <Key symbol="2" echoSymbol={this.echoSymbol} />
          <Key symbol="3" echoSymbol={this.echoSymbol} />
          <Key symbol="4" echoSymbol={this.echoSymbol} />
        </View>
        <View style={styles.numgroup}>
          <Key symbol="5" echoSymbol={this.echoSymbol} />
          <Key symbol="6" echoSymbol={this.echoSymbol} />
          <Key symbol="7" echoSymbol={this.echoSymbol} />
          <Key symbol="8" echoSymbol={this.echoSymbol} />
        </View>
        <View style={styles.numgroup}>
          <Key symbol="9" echoSymbol={this.echoSymbol} />
          <Key symbol="0" echoSymbol={this.echoSymbol} />
          <Key symbol="." echoSymbol={this.echoSymbol} />
          <Key symbol="=" echoSymbol={this.echoSymbol} />
        </View>
        <ScrollView horizontal={true}>
          <Key symbol="CLR" op={true} echoSymbol={this.echoSymbol} />
          <Key symbol="DEL" op={true} echoSymbol={this.echoSymbol} />
          <Key symbol="+" op={true} echoSymbol={this.echoSymbol} />
          <Key symbol="-" op={true} echoSymbol={this.echoSymbol} />
          <Key symbol="*" op={true} echoSymbol={this.echoSymbol} />
          <Key symbol="/" op={true} echoSymbol={this.echoSymbol} />
          <Key symbol="(" op={true} echoSymbol={this.echoSymbol} />
          <Key symbol=")" op={true} echoSymbol={this.echoSymbol} />
          <Key symbol="sin" op={true} echoSymbol={this.echoSymbol} />
          <Key symbol="cos" op={true} echoSymbol={this.echoSymbol} />
          <Key symbol="tan" op={true} echoSymbol={this.echoSymbol} />
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  keypad: {
    flex: 2,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textcolor: {
    color: "white",
  },
  numgroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
