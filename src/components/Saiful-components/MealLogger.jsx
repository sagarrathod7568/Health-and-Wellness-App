import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Image,
  Text,
  Flex,
  Select,
  Spinner,
  Heading,
  Stack,
} from "@chakra-ui/react";

const DietPlanning = () => {
  const [dietType, setDietType] = useState(""); // Selected diet type
  const [mealPlan, setMealPlan] = useState(null); // Meal plan data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const API_KEY = "b87635e1ce0545a6abef6818cfb3b6df"; // Replace with your actual Spoonacular API key

  const fetchMealPlan = async () => {
    setLoading(true);
    setError("");
    setMealPlan(null);

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate`,
        {
          params: {
            timeFrame: "day", // You can change this to 'week' if needed
            diet: dietType, // The selected diet type
            apiKey: API_KEY,
          },
        }
      );

      setMealPlan(response.data);
    } catch (err) {
      setError("Failed to fetch meal plan. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDietChange = (e) => {
    setDietType(e.target.value);
  };

  const handleFetchClick = () => {
    fetchMealPlan();
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={6}>
        Diet Planning
      </Heading>

      <Flex alignItems="center" mb={6}>
        <Text fontSize="lg" mr={4}>
          Choose a diet plan:
        </Text>
        <Select
          placeholder="Select..."
          value={dietType}
          onChange={handleDietChange}
        >
          <option value="weight loss">Weight Loss</option>
          <option value="weight gain">Weight Gain</option>
          <option value="mass gain">Mass Gain</option>
          <option value="mood lifters">Mood Lifters</option>
          {/* Add more diet types as needed */}
        </Select>
        <Button colorScheme="teal" onClick={handleFetchClick} ml={4}>
          Fetch Meal Plan
        </Button>
      </Flex>

      {loading && <Spinner size="xl" />}
      {error && <Text color="red.500">{error}</Text>}

      {mealPlan && (
        <Box mt={6}>
          <Heading as="h3" size="lg" mb={4}>
            Your Meal Plan:
          </Heading>

          <Stack spacing={8}>
            {mealPlan.meals.map((meal) => (
              <Flex
                key={meal.id}
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                direction="column"
              >
                <Image
                  src={`https://spoonacular.com/recipeImages/${meal.id}-556x370.${meal.imageType}`}
                  alt={meal.title}
                  borderRadius="md"
                  mb={4}
                />
                <Heading as="h4" size="md" mb={2}>
                  {meal.title}
                </Heading>
                <Text>Ready in {meal.readyInMinutes} minutes</Text>
                <Text>Servings: {meal.servings}</Text>
                <Button
                  as="a"
                  href={meal.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="teal"
                  mt={4}
                >
                  View Recipe
                </Button>
              </Flex>
            ))}
          </Stack>

          <Box mt={8}>
            <Heading as="h4" size="md" mb={2}>
              Nutritional Information (per day):
            </Heading>
            <Text>Calories: {mealPlan.nutrients.calories.toFixed(2)}</Text>
            <Text>
              Carbohydrates: {mealPlan.nutrients.carbohydrates.toFixed(2)} g
            </Text>
            <Text>Fat: {mealPlan.nutrients.fat.toFixed(2)} g</Text>
            <Text>Protein: {mealPlan.nutrients.protein.toFixed(2)} g</Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DietPlanning;
