import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Stack,
  Spinner,
  Input,
  Button,
} from "@chakra-ui/react";

const RecipeFetcher = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://api.edamam.com/api/recipes/v2",
        {
          params: {
            type: "user",
            app_id: "e1b863cf",
            app_key: "e625ef7ea9c1b4254c7e191495e0d755",
            q: searchQuery,
          },
          headers: {
            Accept: "application/json",
            "Accept-Language": "en",
          },
        }
      );

      setRecipes(response.data.hits);
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchRecipes(query);
  };

  useEffect(() => {
    // Initial fetch for a default query, e.g., "chicken"
    fetchRecipes("chicken");
  }, []);

  return (
    <Box p={5}>
      <Heading mb={4}>Recipe Search</Heading>
      <Box mb={4}>
        <Input
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          mr={2}
        />
        <Button onClick={handleSearch} colorScheme="teal">
          Search
        </Button>
      </Box>
      {loading && <Spinner size="xl" />}
      {error && <Text color="red.500">{error}</Text>}
      <Stack spacing={4}>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md">
              <Heading size="md">{recipe.recipe.label}</Heading>
              <Text mt={2}>{recipe.recipe.source}</Text>
              <Text>Calories: {Math.round(recipe.recipe.calories)}</Text>
              <Text>
                Ingredients: {recipe.recipe.ingredientLines.join(", ")}
              </Text>
            </Box>
          ))
        ) : (
          <Text>No recipes found.</Text>
        )}
      </Stack>
    </Box>
  );
};

export default RecipeFetcher;
