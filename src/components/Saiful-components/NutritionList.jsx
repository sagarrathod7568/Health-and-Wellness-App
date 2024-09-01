// src/components/NutritionList.jsx
import React from "react";
import { Box, Text, List, ListItem, Heading } from "@chakra-ui/react";

const NutritionList = ({ meals }) => {
  return (
    <Box padding="20px" boxShadow="md" borderRadius="md">
      <Heading mb={4}>Your Meals</Heading>
      <List spacing={3}>
        {meals.map((meal, index) => (
          <ListItem key={index}>
            <Text>
              {meal.name} - {meal.calories} calories - {meal.mealType}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NutritionList;
