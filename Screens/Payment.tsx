import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [securityCode, setSecurityCode] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Online Payment</Text>
      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.paymentOption} onPress={() => {}}>
          <Text style={styles.paymentText}>PayPal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption} onPress={() => {}}>
          <Text style={styles.paymentText}>Visa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption} onPress={() => {}}>
          <Text style={styles.paymentText}>Mastercard</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.paymentDetailInput}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        />
        <TextInput
          style={styles.paymentDetailInput}
          placeholder="Expiry Date"
          value={expiryDate}
          onChangeText={(text) => setExpiryDate(text)}
        />
        <TextInput
          style={styles.security}
          placeholder="Security Code"
          value={securityCode}
          onChangeText={(text) => setSecurityCode(text)}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            // Logic to generate OTP and send it via email
          }}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.otp}
          placeholder="OTP Number"
          value={''}
          onChangeText={(text) => {}}
          keyboardType="number-pad"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgray',
    borderRadius:20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  paymentText: {
    fontSize: 16,
  },
  paymentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentDetailInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: 250,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
    marginLeft:180,
    marginTop:-50,
  },

  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  security:{
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: 150,
    marginBottom: 20,
  },
  otp:{
    marginTop:20,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: 150,
  }
});

export default Payment

