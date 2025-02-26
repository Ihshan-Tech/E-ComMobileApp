import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

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
    marginTop: 30,
    borderRadius: 10,
  },
  burgerIcon: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 22,
    color: '#61dafb',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
