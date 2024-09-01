import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Image, Text, Heading, Spinner } from "@chakra-ui/react";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [nutritionalHtml, setNutritionalHtml] = useState(""); // To store the parsed HTML

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey: "b87635e1ce0545a6abef6818cfb3b6df",
            },
          }
        );
        setRecipe(response.data);

        // Fetch additional information from the sourceUrl
        if (response.data.sourceUrl) {
          const sourceResponse = await axios.get(
            `https://cors-anywhere.herokuapp.com/${response.data.sourceUrl}`
          );

          // Parse the HTML using DOMParser
          const parser = new DOMParser();
          const doc = parser.parseFromString(sourceResponse.data, "text/html");

          // Assuming the nutritional section is under a specific class or ID
          const nutritionalSection = doc.querySelector(".nutrition-section"); // Adjust the selector as per actual HTML structure
          if (nutritionalSection) {
            setNutritionalHtml(nutritionalSection.innerHTML);
          }
        }
      } catch (err) {
        setError("Failed to fetch recipe details. Please try again later.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return recipe ? (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        {recipe.title}
      </Heading>
      <Image src={recipe.image} alt={recipe.title} borderRadius="md" mb={4} />
      <Text mb={4}>Ready in: {recipe.readyInMinutes} minutes</Text>
      <Text mb={4}>Servings: {recipe.servings}</Text>
      <Text mb={4}>
        Source:{" "}
        <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
          {recipe.sourceUrl}
        </a>
      </Text>

      {/* Display nutritional information */}
      <Box mt={8}>
        <Heading as="h3" size="lg" mb={4}>
          Nutritional Information:
        </Heading>
        {recipe.nutrition?.nutrients.map((nutrient) => (
          <Text key={nutrient.name}>
            {nutrient.name}: {nutrient.amount} {nutrient.unit}
          </Text>
        ))}
        {/* Render additional nutritional HTML if available */}
        {nutritionalHtml && (
          <Box mt={4} dangerouslySetInnerHTML={{ __html: nutritionalHtml }} />
        )}
      </Box>
    </Box>
  ) : (
    <Text>No recipe details found.</Text>
  );
};

export default RecipeDetailsPage;
