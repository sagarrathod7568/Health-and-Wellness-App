import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Image,
  Text,
  Flex,
  Grid,
  Spinner,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import calorieImage from "./assets/calorie.jpg"; // Import the image

const DietPlanning = () => {
  const [dietType, setDietType] = useState("");
  const [excludeIngredients, setExcludeIngredients] = useState("");
  const [intolerances, setIntolerances] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [maxCalories, setMaxCalories] = useState("");
  const [minProtein, setMinProtein] = useState("");
  const [maxProtein, setMaxProtein] = useState("");
  const [minFat, setMinFat] = useState("");
  const [maxFat, setMaxFat] = useState("");
  const [minCarbs, setMinCarbs] = useState("");
  const [maxCarbs, setMaxCarbs] = useState("");
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  const API_KEY = "b87635e1ce0545a6abef6818cfb3b6df"; // Replace with your actual Spoonacular API key

  const fetchMealPlan = async () => {
    setLoading(true);
    setError("");
    setMealPlan(null);

    try {
      const response = await axios.get(
        "https://api.spoonacular.com/mealplanner/generate",
        {
          params: {
            timeFrame: "day",
            diet: dietType,
            excludeIngredients: excludeIngredients,
            intolerances: intolerances,
            cuisine: cuisine,
            maxCalories: maxCalories,
            minProtein: minProtein,
            maxProtein: maxProtein,
            minFat: minFat,
            maxFat: maxFat,
            minCarbs: minCarbs,
            maxCarbs: maxCarbs,
            apiKey: API_KEY,
          },
        }
      );

      setMealPlan(response.data);
      setFormVisible(false); // Hide form after data is fetched
    } catch (err) {
      setError("Failed to fetch meal plan. Please try again later.");
      console.error("Error fetching meal plan:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      p={5}
      maxW="600px"
      mx="auto"
      bgImage={`url(${calorieImage})`} // Apply the background image
      bgSize="cover" // Ensure the image covers the container
      bgPosition="center" // Center the image
      bgRepeat="no-repeat" // Prevent repeating the image
    >
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Diet Planning
      </Heading>

      {formVisible ? (
        <Flex direction="column" mb={6}>
          <FormControl mb={4}>
            <FormLabel>Choose a diet plan:</FormLabel>
            <Select
              placeholder="Select diet type"
              value={dietType}
              onChange={(e) => setDietType(e.target.value)}
            >
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="paleo">Paleo</option>
              <option value="keto">Keto</option>
              {/* Add more diet types as needed */}
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Exclude Ingredients:</FormLabel>
            <Input
              placeholder="Enter ingredients to exclude"
              value={excludeIngredients}
              onChange={(e) => setExcludeIngredients(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Intolerances:</FormLabel>
            <Input
              placeholder="Enter intolerances (e.g., dairy, gluten)"
              value={intolerances}
              onChange={(e) => setIntolerances(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Cuisine:</FormLabel>
            <Select
              placeholder="Select cuisine"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="italian">Italian</option>
              <option value="mexican">Mexican</option>
              <option value="japanese">Japanese</option>
              <option value="indian">Indian</option>
              {/* Add more cuisines as needed */}
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Max Calories:</FormLabel>
            <NumberInput
              value={maxCalories}
              onChange={(value) => setMaxCalories(value)}
            >
              <NumberInputField placeholder="Enter max calories" />
            </NumberInput>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Min Protein (g):</FormLabel>
            <NumberInput
              value={minProtein}
              onChange={(value) => setMinProtein(value)}
            >
              <NumberInputField placeholder="Enter min protein" />
            </NumberInput>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Max Protein (g):</FormLabel>
            <NumberInput
              value={maxProtein}
              onChange={(value) => setMaxProtein(value)}
            >
              <NumberInputField placeholder="Enter max protein" />
            </NumberInput>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Min Fat (g):</FormLabel>
            <NumberInput value={minFat} onChange={(value) => setMinFat(value)}>
              <NumberInputField placeholder="Enter min fat" />
            </NumberInput>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Max Fat (g):</FormLabel>
            <NumberInput value={maxFat} onChange={(value) => setMaxFat(value)}>
              <NumberInputField placeholder="Enter max fat" />
            </NumberInput>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Min Carbohydrates (g):</FormLabel>
            <NumberInput
              value={minCarbs}
              onChange={(value) => setMinCarbs(value)}
            >
              <NumberInputField placeholder="Enter min carbs" />
            </NumberInput>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Max Carbohydrates (g):</FormLabel>
            <NumberInput
              value={maxCarbs}
              onChange={(value) => setMaxCarbs(value)}
            >
              <NumberInputField placeholder="Enter max carbs" />
            </NumberInput>
          </FormControl>

          <Button colorScheme="teal" onClick={fetchMealPlan}>
            Fetch Meal Plan
          </Button>
        </Flex>
      ) : (
        <Button colorScheme="teal" mb={6} onClick={() => setFormVisible(true)}>
          Show Meal Plan Form
        </Button>
      )}

      {loading && <Spinner size="xl" />}
      {error && <Text color="red.500">{error}</Text>}

      {mealPlan && (
        <Box mt={6}>
          <Heading as="h3" size="lg" textAlign="center" mb={4}>
            Your Meal Plan:
          </Heading>

          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
            {mealPlan.meals.map((meal) => (
              <Box
                key={meal.id}
                p={4}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                bg="white"
                textAlign="center"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
              >
                <Image
                  src={`https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`}
                  alt={meal.title}
                  borderRadius="md"
                  mb={3}
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
                  mt={3}
                  size="sm"
                >
                  View Recipe
                </Button>
              </Box>
            ))}
          </Grid>

          <Box mt={8}>
            <Heading as="h4" size="md" textAlign="center" mb={4}>
              Nutritional Information (per day):
            </Heading>

            <Grid
              templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
              gap={6}
            >
              <Box
                p={4}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                bg="white"
                textAlign="center"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
              >
                <Heading as="h4" size="sm" mb={2}>
                  Calories
                </Heading>
                <Text>{mealPlan.nutrients.calories.toFixed(2)} kcal</Text>
              </Box>

              <Box
                p={4}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                bg="white"
                textAlign="center"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
              >
                <Heading as="h4" size="sm" mb={2}>
                  Protein
                </Heading>
                <Text>{mealPlan.nutrients.protein.toFixed(2)}g</Text>
              </Box>

              <Box
                p={4}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                bg="white"
                textAlign="center"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
              >
                <Heading as="h4" size="sm" mb={2}>
                  Fat
                </Heading>
                <Text>{mealPlan.nutrients.fat.toFixed(2)}g</Text>
              </Box>

              <Box
                p={4}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                bg="white"
                textAlign="center"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
              >
                <Heading as="h4" size="sm" mb={2}>
                  Carbohydrates
                </Heading>
                <Text>{mealPlan.nutrients.carbohydrates.toFixed(2)}g</Text>
              </Box>
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DietPlanning;
