// src/components/ExerciseList.jsx
import React from "react";
import { Box, Text, List, ListItem, Heading } from "@chakra-ui/react";

const ExerciseList = ({ exercises }) => {
  return (
    <Box padding="20px" boxShadow="md" borderRadius="md">
      <Heading mb={4}>Your Exercises</Heading>
      <List spacing={3}>
        {exercises.map((exercise, index) => (
          <ListItem key={index}>
            <Text>
              {exercise.name} - {exercise.duration} minutes -{" "}
              {exercise.intensity} intensity
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ExerciseList;
