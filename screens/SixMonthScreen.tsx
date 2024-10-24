import React from 'react';import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SixMonthScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Month Learnerships</Text>

      <View style={styles.course}>
        <Text style={styles.courseTitle}>First Aid</Text>
        <Text style={styles.courseDescription}>
          This First Aid course equips participants with essential life-saving skills.
          It prepares individuals to respond effectively in emergencies, manage wounds, perform CPR, and handle various medical situations with confidence.
        </Text>
        <Text style={styles.keySkills}>
          Key Skills: Emergency response, CPR, wound care, burn treatment.
        </Text>
      </View>

      <View style={styles.course}>
        <Text style={styles.courseTitle}>Life Skills</Text>
        <Text style={styles.courseDescription}>
          The Life Skills course focuses on essential personal and professional skills. 
          Participants will learn time management, financial literacy, and communication to succeed in both personal and career endeavors.
        </Text>
        <Text style={styles.keySkills}>
          Key Skills: Financial literacy, communication, time management.
        </Text>
      </View>

      <View style={styles.course}>
        <Text style={styles.courseTitle}>Sewing</Text>
        <Text style={styles.courseDescription}>
          This Sewing course is aimed at individuals looking to gain practical sewing skills, 
          from basic machine operation to garment construction. Participants will learn to create clothing and make alterations.
        </Text>
        <Text style={styles.keySkills}>
          Key Skills: Garment construction, sewing techniques, fabric selection.
        </Text>
      </View>

      <View style={styles.course}>
        <Text style={styles.courseTitle}>Landscaping</Text>
        <Text style={styles.courseDescription}>
          The Landscaping course is designed for aspiring garden designers and landscape professionals.
          Participants will gain hands-on experience in garden design, plant care, and sustainable landscaping techniques.
        </Text>
        <Text style={styles.keySkills}>
          Key Skills: Garden design, plant care, sustainable practices.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  course: {
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  keySkills: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default SixMonthScreen;
