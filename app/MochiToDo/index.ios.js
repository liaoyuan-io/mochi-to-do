/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

class MochiToDo extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} 
        placeholder="请输入待办事项..."
        />
      </View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    alignSelf:'stretch', 
    backgroundColor: 'white', 
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginTop: 20 + 24,
    marginHorizontal: 24,
    marginBottom: 24,
  },
  input: {
    height: 24, 
    fontSize: 20, 
    lineHeight: 24
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MochiToDo', () => MochiToDo);
