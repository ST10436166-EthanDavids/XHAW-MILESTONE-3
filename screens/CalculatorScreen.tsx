import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const CalculatorScreen = () => {
  const [numCourses, setNumCourses] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  
  const calculateFees = () => {
    const parsedNumCourses = parseInt(numCourses, 10);
    
    if (isNaN(parsedNumCourses) || parsedNumCourses <= 0) {
      Alert.alert("Invalid Input", "Please enter a valid number of courses.");
      return;
    }

    const costPerCourse = 1000; // Example cost
    const discount = parsedNumCourses >= 3 ? 0.15 : parsedNumCourses === 2 ? 0.10 : 0.05;
    const baseCost = parsedNumCourses * costPerCourse;
    const finalCost = baseCost - (baseCost * discount);
    setTotalCost(finalCost);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate Your Fees</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number of courses"
        keyboardType="numeric"
        value={numCourses}
        onChangeText={setNumCourses}
      />
      <Button title="Calculate" onPress={calculateFees} />
      {totalCost > 0 && (
        <Text style={styles.result}>Total Cost: R{totalCost.toFixed(2)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    width: '100%',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CalculatorScreen;
