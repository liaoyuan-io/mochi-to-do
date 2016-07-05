import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

class ToDoInput extends Component {
  render() {
    return <View style={styles.inputContainer}>
      <TextInput style={styles.input}
                 placeholder="请输入待办事项..."
                 onChangeText={this.props.onChangeText}
                 onSubmitEditing={this.props.onSubmitEditing}
                 value={this.props.text}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white', 
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  input: {
    fontSize: 20, 
    lineHeight: 24
  }
});

export default module.exports = ToDoInput;