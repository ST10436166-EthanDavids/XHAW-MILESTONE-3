import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import FAQScreen from './screens/FAQScreen';
import SixMonthScreen from './screens/SixMonthScreen';
import SixWeekScreen from './screens/SixWeekScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import { RootStackParamList } from './types'; // Import the RootStackParamList type

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekScreen} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  main: {
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 40,
  },
});

export default App;
