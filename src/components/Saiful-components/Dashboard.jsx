// src/components/Dashboard.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import ExerciseInput from "./ExerciseInput";
import ExerciseList from "./ExerciseList";
import NutritionInput from "./NutritionInput";
import NutritionList from "./NutritionList";
import MoodTracker from "./MoodTracker";
import MindfulnessTips from "./MindfulnessTips";

function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  const [meals, setMeals] = useState([]);
  const [mood, setMood] = useState("");

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  const handleSaveExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const handleSaveMeal = (meal) => {
    setMeals([...meals, meal]);
  };

  const handleSaveMood = (mood) => {
    setMood(mood);
  };

  return (
    <Box padding="20px" maxWidth="600px" margin="auto" textAlign="center">
      <Heading mb={6}>Welcome, {currentUser.email}</Heading>
      <Text fontSize="lg" mb={6}>
        Track your health and wellness activities below.
      </Text>
      <VStack spacing={8}>
        <ExerciseInput onSave={handleSaveExercise} />
        <ExerciseList exercises={exercises} />
        <NutritionInput onSave={handleSaveMeal} />
        <NutritionList meals={meals} />
        <MoodTracker onSave={handleSaveMood} />
        {mood && <MindfulnessTips mood={mood} />}
      </VStack>
      <Button colorScheme="teal" onClick={handleLogout} mt={6}>
        Logout
      </Button>
    </Box>
  );
}

export default Dashboard;
