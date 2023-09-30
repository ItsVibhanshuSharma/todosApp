import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Button,
  Modal,
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
  const [visible, setVisible] = useState('');
  const handleSubmit = () => {
    console.log('Task ->', task);
    // setList(...list, task);
    // setList([...list, {title: task}]);
    setList([...list, {title: task}]);
    setTask('');
    setVisible(false);
  };

  const handleAdd = () => {
    setVisible(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{flex: 3}}>
          <Text style={styles.taskList}>Task List</Text>
          {list.map((item, index) => (
            <View style={styles.wrap}>
              <Text key={index} style={{color: 'black'}}>
                {item.title}
              </Text>
            </View>
          ))}
          <View>
            <Modal visible={visible} animationType="slide">
              <View style={styles.modalContainer}>
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
            </Modal>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              height: '100%',
              width: '100%',
              justifyContent: 'flex-end',
              position: 'absolute',
            }}
          >
            <Pressable style={styles.add} onPress={handleAdd}>
              <Text>Add </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.greyColor,
  },
  subContainer: {
    justifyContent: 'space-between',
    height: '100%',
    padding: 20,
  },
  wrap: {
    borderWidth: 2,
    height: 50,
    borderRadius: 20,
    borderColor: colors.greyColor,
    backgroundColor: colors.whiteColor,
    margin: 20,
    padding: 10,
  },
  add: {
    backgroundColor: colors.secondaryColor,
    borderRadius: 20,
    width: 100,
    padding: 10,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: colors.primaryColor,
    borderRadius: 20,
    width: 100,
    padding: 10,
    alignItems: 'center',
  },
  addText: {
    backgroundColor: colors.whiteColor,
    margin: 20,
    borderRadius: 20,
  },
  taskList: {
    fontSize: 20,
    fontWeight: '900',
    textDecorationLine: 'underline',
    marginStart: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
