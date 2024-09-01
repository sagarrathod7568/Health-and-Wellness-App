// src/components/MoodTracker.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Text,
} from "@chakra-ui/react";

const MoodTracker = ({ onSave }) => {
  const [mood, setMood] = useState("");

  const handleChange = (e) => {
    setMood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(mood);
    setMood("");
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
        <FormLabel>Select Your Mood</FormLabel>
        <Select value={mood} onChange={handleChange}>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="anxious">Anxious</option>
          <option value="calm">Calm</option>
        </Select>
      </FormControl>

      <Button type="submit" colorScheme="teal" width="full">
        Save Mood
      </Button>
    </Box>
  );
};

export default MoodTracker;
