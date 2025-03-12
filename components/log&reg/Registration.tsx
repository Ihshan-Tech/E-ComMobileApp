import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const Registration = () => {
  return (
    <View style={styles.container}>
      <Text>Registration</Text>
      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="black"
      />
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="black"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        placeholderTextColor="black"
      />
      <TextInput
        placeholder="Confirm Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        placeholderTextColor="black"
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "white", fontSize: 16 }}>Register</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity onPress={() => { /* Navigate to Sign In */ }}>
          <MaterialIcons name="login" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Navigate to Home */ }}>
          <MaterialIcons name="home" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  btn: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
})

export default Registration

