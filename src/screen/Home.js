import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Button,
} from 'react-native';
import colors from '../constant/colors';

const data = [
  {
    title: 'Hello',
  },
  {
    title: 'Hello',
  },
];
export default function Home() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const handleSubmit = () => {
    console.log('Task ->', task);
    // setList(...list, task);
    // setList([...list, {title: task}]);
    setList([...list, {title: task}]);
    setTask('');
  };

  const handleShowList = () => {
    console.log('List', list);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <View style={{alignItems: 'flex-end'}}>
            <Pressable style={styles.add}>
              <Text>Add </Text>
            </Pressable>
          </View>
          <Button title="list" onPress={handleShowList} />
          <View style={styles.addText}>
            <TextInput
              placeholder="Enter a task"
              value={task}
              onChangeText={setTask}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <Text>Submit </Text>
            </Pressable>
          </View>
        </View>

        <View style={{flex: 3}}>
          <Text style={styles.taskList}>Task List</Text>
          {list.map((item, index) => (
            <View style={styles.wrap}>
              <Text>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'space-between',
    height: '100%',
    padding: 20,
  },
  wrap: {
    borderWidth: 2,
    height: 80,
    borderRadius: 20,
    borderColor: colors.greenColor,
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
  },
  add: {
    backgroundColor: 'red',
    borderRadius: 20,
    width: 100,
    padding: 10,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 100,
    padding: 10,
    alignItems: 'center',
  },
  addText: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
  },
  taskList: {
    fontSize: 20,
    fontWeight: '900',
    textDecorationLine: 'underline',
    marginStart: 20,
  },
});
