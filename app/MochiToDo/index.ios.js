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
  ScrollView,
  Text,
  View
} from 'react-native';

const TODOS = [
  {id: 0, content: '当有待办事项存在时，我希望能看到待办事项列表', isDone: false},
  {id: 1, content: '当我输入文字并使用回车确认时，我希望新输入的待办事项项目显示在列表中', isDone: false},
  {id: 2, content: '当我点击待办事项左侧的checkbox时，待办事项应该标示为已完成', isDone: false},
  {id: 3, content: '当我点击已完成待办事项左侧的checkbox时，待办事项应该标示为未完成', isDone: false},
  {id: 4, content: '当我点击待办事项右侧的关闭按钮时，待办事项应当被删除', isDone: false}
];

class ToDo {
  constructor(items = []){
    this.items = items;
  }
  add(content){
    const id = this.items.length
    this.items.push({
      id: id, content: content, isDone: false
    })
  }
  check(id){
    this.items = this.items.map((item)=>{
      if(item.id !== id) return item;
      return Object.assign({},item, {isDone: !item.isDone});
    })
  }
  remove(id){
    this.items = this.items.filter((item)=>{
      return item.id !== id
    })
  }
}

const toDoData = new ToDo(TODOS);

class ToDoItem extends Component {
  renderCheckbox(checked){
    if(checked) return <View style={[styles.iconContainer, {backgroundColor: 'grey', borderWidth: 1, borderColor: 'black'}]}>
      <Text style={styles.icon}>✔️</Text>
    </View> 
    return <View style={[styles.iconContainer, {backgroundColor: 'white', borderWidth: 1, borderColor: 'black'}]}>
    </View> 
  }
  render() {
    const checked = this.props.checked;
    return <View style={styles.toDoItemContainer}>
      {this.renderCheckbox(checked)}
      <View style={styles.todoItemContent}>
        <Text style={[styles.todoItemContentText, checked && {textDecorationLine: 'line-through'}]}>{this.props.children}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>✖️</Text>
      </View>
    </View>
  }
}

class MochiToDo extends Component {
  constructor(){
    super();
    this.state = {
      todos: toDoData.items
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} 
        placeholder="请输入待办事项..."
        />
      </View>
      <ScrollView>
        { this.state.todos.map((todo)=>{
          return <ToDoItem key={todo.id} checked={todo.isDone}>{todo.content}</ToDoItem>
        }) }
      </ScrollView>
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
