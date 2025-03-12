import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you sure you want to logout?</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Logout;

