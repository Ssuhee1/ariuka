import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DoubleClick from 'react-native-double-click';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [content, setContent] = useState('');

  const onAdd = () => {
    if (content) {
      setTodo([
        ...todo,
        { id: Date.now(), content: content, isChecked: false },
      ]);
      setContent('');
      Keyboard.dismiss();
    }
  };
  const onCheck = (status, id) =>
    setTodo(
      todo.map((td) => (td.id === id ? { ...td, isChecked: status } : td))
    );
  const onDelete = (id) => setTodo(todo.filter((td) => td.id !== id));
  const onDeleteAll = () => setTodo([]);

  return (
    <TouchableNativeFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>To do list</Text>
          <AntDesign
            name='delete'
            size={24}
            color='red'
            onPress={onDeleteAll}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Todo'
            onChangeText={(val) => setContent(val)}
            value={content}
          />
          <Button title='Add' onPress={onAdd} />
        </View>
        <View style={styles.body}>
          {todo.length
            ? todo.map((td, tdIdx) => (
                <DoubleClick onClick={() => onDelete(td.id)} key={tdIdx}>
                  <View style={styles.todo}>
                    <Text>
                      {tdIdx + 1}
                      {') '} {td.content}
                    </Text>
                    <BouncyCheckbox
                      isChecked={td.isChecked}
                      onPress={(status) => onCheck(status, td.id)}
                      fillColor='blue'
                    />
                  </View>
                </DoubleClick>
              ))
            : null}
          <Text style={styles.text}>
            Todo: {todo.length}, Check:{' '}
            {todo?.filter((td) => td.isChecked === true).length}
          </Text>
        </View>
        <StatusBar style='auto' />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
    paddingTop: 50,
  },
  head: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: '10%',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    height: '10%',
    width: '80%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    width: '80%',
    borderRadius: 25,
    elevation: 40,
    paddingHorizontal: 20,
  },
  body: {
    width: '100%',
    flex: 7,
  },
  todo: {
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 20,
  },
});

export default App;
