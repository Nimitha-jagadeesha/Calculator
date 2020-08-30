import React, { Component } from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

export class key extends Component {
  _onPress = () => {
    this.props.echoSymbol(this.props.symbol);
  };

  render() {
    return (
      <TouchableHighlight
        onPress={this._onPress}
        style={this.props.op ? [styles.key, styles.op] : styles.key}
      >
        <View>
          <Text
            style={
              this.props.op
                ? [styles.textcolor, styles.optext]
                : styles.textcolor
            }
          >
            {this.props.symbol}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default key;
const styles = StyleSheet.create({
  key: {
    borderRadius: 30,
    backgroundColor: "#eaeaea",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  op: {
    backgroundColor: "#989898",
    marginRight: 10,
  },
  textcolor: {
    fontSize: 20,
  },
  optext: {
    color: "#ffffff",
  },
});
