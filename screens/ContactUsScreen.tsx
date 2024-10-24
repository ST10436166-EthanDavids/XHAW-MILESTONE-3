import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


const ContactUsScreen = () => {
  const [name, setName] = useState(''); // State for name
  const [email, setEmail] = useState(''); // State for email
  const [message, setMessage] = useState(''); // State for message

  const submitForm = () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "All fields are required.");
    } else {
      Alert.alert("Success", "Your message has been sent.");
      // Additional logic to handle form submission (e.g., API call) can be added here
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Submit" onPress={submitForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default ContactUsScreen;
