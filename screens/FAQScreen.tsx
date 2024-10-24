import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type FAQScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FAQ'>;

const FAQScreen = () => {
  const navigation = useNavigation<FAQScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.subTitle}>Frequently Asked Questions</Text>
        <View style={styles.faqItem}>
          <Text style={styles.question}>How do I register for courses?</Text>
          <Text style={styles.answer}>
            You can register by visiting the{' '}
            <Text style={styles.inlineLink} onPress={() => navigation.navigate('Calculator')}>
              Calculate Fees
            </Text>{' '}
            page to choose your courses and submit your information.
          </Text>
        </View>
        <View style={styles.faqItem}>
          <Text style={styles.question}>What discounts are available?</Text>
          <Text style={styles.answer}>
            We offer discounts based on the number of courses you select. 5% for two courses, 10% for
            three, and 15% for more than three.
          </Text>
        </View>
        <View style={styles.faqItem}>
          <Text style={styles.question}>What are the payment methods?</Text>
          <Text style={styles.answer}>
            We accept EFT payments and cash at our Johannesburg office. Please contact us for more
            details.
          </Text>
        </View>
      </View>
    </ScrollView>
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
  faqItem: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
    marginTop: 5,
  },
  inlineLink: {
    color: '#007bff',
  },
});

export default FAQScreen;
