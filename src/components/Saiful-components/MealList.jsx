import React from "react";
import { Box, Heading, Text, Stack, Badge, Divider } from "@chakra-ui/react";

const MealList = ({ meals }) => {
  return (
    <Box p={6} bg="gray.50" borderRadius="md">
      <Heading as="h3" size="lg" mb={4}>
        Logged Meals
      </Heading>
      <Stack spacing={4}>
        {meals.length === 0 ? (
          <Text>No meals logged yet. Start by adding a meal!</Text>
        ) : (
          meals.map((meal, index) => (
            <Box
              key={index}
              p={4}
              borderWidth={1}
              borderRadius="md"
              bg="white"
              boxShadow="sm"
            >
              <Heading as="h4" size="md" mb={2}>
                {meal.name}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Ingredients: {meal.ingredients}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Serving Size: {meal.servingSize}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Meal Time: {meal.mealTime}
              </Text>
              <Divider my={4} />
              <Heading as="h5" size="sm" mb={2}>
                Nutritional Information:
              </Heading>
              <Text fontSize="sm">
                Calories: {meal.nutritionalInfo.calories}
              </Text>
              {/* Add more nutritional details here */}
            </Box>
          ))
        )}
      </Stack>
    </Box>
  );
};

export default MealList;
