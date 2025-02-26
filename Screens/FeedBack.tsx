import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';

const FeedBack = () => {
  const [rating, setRating] = useState<number>(5);
  const [feedback, setFeedback] = useState<string>('');

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleFeedbackChange = (e: string) => {
    setFeedback(e);
  };

  const handleSubmit = () => {
    // Handle submit logic, e.g., send data to a server
    console.log({ rating, feedback });
    Alert.alert('Thank you for your feedback!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Rate Us</Text>
      <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 20 }}>
        {[1, 2, 3, 4, 5].map((star) => (star <= rating ? '★' : '☆')).join(' ')}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => handleRating(star)}
          >
            {star <= rating ? '★' : '☆'}
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.header}>Feedback</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Write your feedback here..."
        value={feedback}
        onChangeText={handleFeedbackChange}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FeedBack;

