import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SixWeekScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Week Short Courses</Text>

      {/* Cooking Course */}
      <View style={styles.course}>
        <Text style={styles.courseTitle}>Introduction to Cooking</Text>
        <Text style={styles.courseDescription}>
          The Introduction to Cooking course will provide participants with foundational skills in the kitchen. You will learn essential cooking techniques like chopping, sautéing, boiling, and baking. Participants will also be introduced to basic food science principles, including how different cooking methods affect food. This course also covers kitchen safety and hygiene practices, such as proper knife handling, safe food storage, and cleanliness.
        </Text>
        <Text style={styles.courseContent}>
          Course Content:
          {"\n"}- Knife skills and basic cooking techniques (chopping, boiling, grilling, etc.)
          {"\n"}- Preparing simple and nutritious meals
          {"\n"}- Understanding ingredients, recipes, and flavor profiles
          {"\n"}- Kitchen safety, hygiene, and food handling standards
          {"\n"}- Time management and meal planning
        </Text>
        <Text style={styles.keySkills}>
          Key Skills: Basic cooking techniques, food safety, meal preparation, recipe understanding, kitchen time management.
        </Text>
      </View>

      {/* Garden Maintenance Course */}
      <View style={styles.course}>
        <Text style={styles.courseTitle}>Garden Maintenance</Text>
        <Text style={styles.courseDescription}>
          This course introduces participants to the fundamentals of garden maintenance. It covers a wide range of gardening tasks such as lawn care, pruning, planting, and weeding. You will also learn about sustainable gardening practices, including composting and water conservation techniques. The course is ideal for individuals interested in maintaining gardens for themselves or as a professional service.
        </Text>
        <Text style={styles.courseContent}>
          Course Content:
          {"\n"}- Basic plant biology and care (watering, fertilizing, soil types)
          {"\n"}- Lawn care and maintenance (mowing, edging, and pest control)
          {"\n"}- Pruning techniques for different types of plants and trees
          {"\n"}- Landscaping basics: designing garden layouts, choosing plants
          {"\n"}- Sustainable gardening: composting, water conservation, and eco-friendly practices
        </Text>
        <Text style={styles.keySkills}>
          Key Skills: Plant care, landscaping basics, eco-friendly gardening, lawn maintenance, pruning, composting.
        </Text>
      </View>

      {/* Child Minding Course */}
      <View style={styles.course}>
        <Text style={styles.courseTitle}>Child Minding</Text>
        <Text style={styles.courseDescription}>
          The Child Minding course equips participants with the knowledge and skills needed to care for children in a safe and nurturing environment. It covers child development stages, age-appropriate activities, and safety protocols. The course is ideal for individuals aiming to work in child care centers, babysitting, or as childminders. Participants will also learn the basics of first aid, particularly focused on young children.
        </Text>
        <Text style={styles.courseContent}>
          Course Content:
          {"\n"}- Understanding child development and age-appropriate activities
          {"\n"}- Ensuring child safety: childproofing, handling emergencies, basic first aid
          {"\n"}- Engaging children in play and learning activities
          {"\n"}- Promoting healthy emotional and social development in children
          {"\n"}- Dealing with common childhood behaviors and ensuring positive discipline
        </Text>
        <Text style={styles.keySkills}>
          Key Skills: Child safety, basic first aid, child development, activity planning, behavioral management.
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
    marginBottom: 10,
  },
  courseContent: {
    fontSize: 16,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  keySkills: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default SixWeekScreen;
