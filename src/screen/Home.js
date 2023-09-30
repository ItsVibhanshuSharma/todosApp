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

export default function Home() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSubmit = () => {
    setList([...list, {title: task}]);
    setTask('');
    setVisible(false);
    // Reset the filtered list to the original list after adding a task
    setFilteredTaskList([...list, {title: task}]);
  };

  const handleAdd = () => {
    setVisible(true);
  };

  const handleSearch = () => {
    const filteredList = list.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredTaskList(filteredList);
  };

  const handleDelete = index => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
    setFilteredTaskList(updatedList);
  };

  const [filteredTaskList, setFilteredTaskList] = useState([...list]); // Initialize with the original list

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{flex: 3}}>
          <View style={styles.searchBar}>
            <TextInput
              value={searchText}
              placeholder="Search..."
              placeholderTextColor={colors.blackColor}
              onChangeText={setSearchText}
              style={{marginStart: 5, color: colors.blackColor}}
            />
            <Text style={styles.searchButton} onPress={handleSearch}>
              Search
            </Text>
          </View>

          <Text style={styles.taskList}>Task List</Text>
          {searchText === ''
            ? list.map((item, index) => (
                <View style={styles.wrap} key={index}>
                  <Text style={{color: 'black'}}>{item.title}</Text>
                  <Pressable onPress={() => handleDelete(index)}>
                    <Text style={styles.deleteButton}>Delete</Text>
                  </Pressable>
                </View>
              ))
            : filteredTaskList.map((item, index) => (
                <View style={styles.wrap} key={index}>
                  <Text style={{color: 'black'}}>{item.title}</Text>
                  <Pressable onPress={() => handleDelete(index)}>
                    <Text style={styles.deleteButton}>Delete</Text>
                  </Pressable>
                </View>
              ))}

          <View style={styles.addContainer}>
            <Pressable style={styles.add} onPress={handleAdd}>
              <Text>Add</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Modal visible={visible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.addText}>
              <TextInput
                placeholderTextColor={colors.blackColor}
                placeholder="Enter a task"
                value={task}
                onChangeText={setTask}
                style={{color: colors.blackColor}}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Pressable style={styles.submitButton} onPress={handleSubmit}>
                <Text>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
    borderRadius: 10,
    borderColor: colors.greyColor,
    backgroundColor: colors.whiteColor,
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: colors.blackColor,
  },
  modalContainer: {
    backgroundColor: colors.whiteColor,
    margin: 20,
    borderRadius: 20,
    height: 150,
    width: 300,
    alignSelf: 'center',
    marginTop: '50%',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  addContainer: {
    alignItems: 'flex-end',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  deleteButton: {
    fontSize: 14,
    color: colors.primaryColor,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  searchBar: {
    height: 40,
    width: '100%',
    borderRadius: 20,
    backgroundColor: colors.whiteColor,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButton: {
    alignSelf: 'flex-end',
    margin: 10,
    color: colors.primaryColor,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
