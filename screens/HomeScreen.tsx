import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types'; // Import the RootStackParamList
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Empowering the Nation</Text>
      <Button title="Go to Contact Us" onPress={() => navigation.navigate('ContactUs')} />
      <Button title="Go to Six Week Courses" onPress={() => navigation.navigate('SixWeekCourses')} />
      <Button title="Go to Six Month Courses" onPress={() => navigation.navigate('SixMonthCourses')} />
      <Button title="Go to FAQ" onPress={() => navigation.navigate('FAQ')} />
      <Button title="Calculate Fees" onPress={() => navigation.navigate('Calculator')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
