// src/components/NutritionInput.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const NutritionInput = ({ onSave }) => {
  const [meal, setMeal] = useState({
    name: "",
    calories: "",
    mealType: "breakfast",
  });

  const handleChange = (e) => {
    setMeal({
      ...meal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(meal);
    setMeal({ name: "", calories: "", mealType: "breakfast" });
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
        <FormLabel>Meal Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={meal.name}
          onChange={handleChange}
          placeholder="e.g., Oatmeal"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Calories</FormLabel>
        <Input
          type="number"
          name="calories"
          value={meal.calories}
          onChange={handleChange}
          placeholder="e.g., 250"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Meal Type</FormLabel>
        <Select name="mealType" value={meal.mealType} onChange={handleChange}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </Select>
      </FormControl>

      <Button type="submit" colorScheme="teal" width="full">
        Save Meal
      </Button>
    </Box>
  );
};

export default NutritionInput;
