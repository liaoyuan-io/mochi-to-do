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
      <View style={styles.toDoItemContainer}>
        <View style={[styles.iconContainer, {backgroundColor: 'white', borderWidth: 1, borderColor: 'black'}]}>
          <Text style={styles.icon}>✔️</Text>
        </View>
        <View style={styles.todoItemContent}>
          <Text style={styles.todoItemContentText}>待办事项一</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>✖️</Text>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
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
  toDoItemContainer: {
    flexDirection:'row', 
    alignItems: 'center', 
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: 'black'
  },
  iconContainer: {
    height: 24, 
    width: 24, 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {fontSize: 12},
  todoItemContent: {flex: 1, paddingHorizontal: 24},
  todoItemContentText: {fontSize: 16},
});

AppRegistry.registerComponent('MochiToDo', () => MochiToDo);
