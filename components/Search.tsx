import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Search = () => {
  const [search, setSearch] = React.useState('');

  const handleSearch = (text: string) => {
    setSearch(text.toLowerCase());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={search}
        onChangeText={handleSearch}
      />
      <TouchableOpacity style={styles.button} onPress={() => console.log(search)}>
        <MaterialIcons name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
  },
  input: {
    height: 40,
    padding: 2,
    fontSize: 16,
    borderRadius: 50,
    backgroundColor: '#f5f5f5',
    color: 'black',
    textTransform: 'lowercase',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
  },
});

export default Search;

