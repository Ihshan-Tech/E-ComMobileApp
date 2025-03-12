import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const checkAvailability = (productName: string) => {
    // Call API to check if product is available
    // For demo purposes, just return true
    return true;
  };

  return (
    <View style={styles.header}>
      {/* Menu Button Opens Sidebar */}
      <TouchableOpacity
        style={styles.burgerIcon}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <MaterialIcons name="menu" size={30} color="#61dafb" />
      </TouchableOpacity>

      <Text style={styles.headerText}>E-Com Family Mart</Text>
      <View style={styles.position}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={handleSearch}
        />

        {search.length > 0 && (
          <Text style={styles.availabilityText}>
            {checkAvailability(search) ? 'Available' : 'Not Available'}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingHorizontal: 20,
    backgroundColor: '#20232a',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 10,
  },
  burgerIcon: {
    marginRight: 15,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 30,
    marginRight: 5,
  },
  headerText: {
    fontSize: 22,
    color: '#61dafb',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  availabilityText: {
    fontSize: 16,
    color: '#61dafb',
    marginLeft: 20,
  },
  position: { 
    marginLeft: 20,
  },
});

export default Header;

