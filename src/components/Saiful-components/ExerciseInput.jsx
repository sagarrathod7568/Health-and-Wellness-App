// src/components/ExerciseInput.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const ExerciseInput = ({ onSave }) => {
  const [exercise, setExercise] = useState({
    name: "",
    duration: "",
    intensity: "medium",
  });

  const handleChange = (e) => {
    setExercise({
      ...exercise,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(exercise);
    setExercise({ name: "", duration: "", intensity: "medium" });
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      padding="20px"
      boxShadow="md"
      borderRadius="md"
    >
      <FormControl mb={4}>
        <FormLabel>Exercise Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={exercise.name}
          onChange={handleChange}
          placeholder="e.g., Running"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Duration (minutes)</FormLabel>
        <Input
          type="number"
          name="duration"
          value={exercise.duration}
          onChange={handleChange}
          placeholder="e.g., 30"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Intensity</FormLabel>
        <Select
          name="intensity"
          value={exercise.intensity}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
      </FormControl>

      <Button type="submit" colorScheme="teal" width="full">
        Save Exercise
      </Button>
    </Box>
  );
};

export default ExerciseInput;
