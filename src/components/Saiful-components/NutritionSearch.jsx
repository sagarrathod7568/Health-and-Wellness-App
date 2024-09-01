import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Input,
  Button,
  VStack,
  Heading,
  Text,
  Spinner,
  useToast,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

const key = "29159f105b44a9d01b96dc338554fa07";
const NutritionSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [nutritionData, setNutritionData] = useState(null);
  const toast = useToast();

  const fetchNutritionData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://trackapi.nutritionix.com/v2/search/instant/?query=${query}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-app-id": "39c5189d",
            "x-app-key": key,
          },
        }
      );
      console.log(response.data); // For debugging
      setNutritionData(response.data.common[0]); // Assuming we take the first item from the 'common' array
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error fetching data.",
        description: "There was an issue retrieving nutrition data.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <Box
      p={8}
      maxW="lg"
      mx="auto"
      mt={10}
      boxShadow="lg"
      borderRadius="lg"
      bg="gray.50"
      position="relative"
      overflow="hidden"
    >
      <Heading as="h2" mb={4} textAlign="center" color="teal.500">
        Nutrition Search
      </Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Enter a food item (e.g., hamburger)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="lg"
        />
        <Button
          colorScheme="teal"
          size="lg"
          onClick={fetchNutritionData}
          isFullWidth
        >
          {loading ? <Spinner size="sm" /> : "Search"}
        </Button>
        {nutritionData && (
          <Box w="100%" mt={6}>
            <Box
              p={4}
              mb={4}
              borderRadius="md"
              boxShadow="md"
              bg="white"
              position="relative"
            >
              <Image
                src={
                  nutritionData.photo?.thumb ||
                  "https://media.istockphoto.com/id/1148854218/video/overhead-shot-of-foods-containing-healthy-or-good-carbohydrates.mp4?s=mp4-640x640-is&k=20&c=v1UTf0D3nHnUgxw5W_vGIQWhVrF_4eYqv53GQOn4Gb8="
                }
                alt={nutritionData.food_name}
                borderRadius="md"
                w="full"
                mb={4}
                fallbackSrc="https://media.istockphoto.com/id/1148854218/video/overhead-shot-of-foods-containing-healthy-or-good-carbohydrates.mp4?s=mp4-640x640-is&k=20&c=v1UTf0D3nHnUgxw5W_vGIQWhVrF_4eYqv53GQOn4Gb8="
              />
              <Heading size="md" mb={2} color="teal.700">
                {nutritionData.food_name}
              </Heading>
              <Text color="gray.500">
                {nutritionData.serving_qty} {nutritionData.serving_unit}
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
                <GridItem>
                  <Text fontWeight="bold" color="teal.600">
                    Calories:
                  </Text>
                  <Text>{nutritionData.nf_calories ?? "N/A"} kcal</Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight="bold" color="teal.600">
                    Protein:
                  </Text>
                  <Text>{nutritionData.nf_protein ?? "N/A"} g</Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight="bold" color="teal.600">
                    Total Fat:
                  </Text>
                  <Text>{nutritionData.nf_total_fat ?? "N/A"} g</Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight="bold" color="teal.600">
                    Carbohydrates:
                  </Text>
                  <Text>{nutritionData.nf_total_carbohydrate ?? "N/A"} g</Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight="bold" color="teal.600">
                    Fiber:
                  </Text>
                  <Text>{nutritionData.nf_dietary_fiber ?? "N/A"} g</Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight="bold" color="teal.600">
                    Sugars:
                  </Text>
                  <Text>{nutritionData.nf_sugars ?? "N/A"} g</Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight="bold" color="teal.600">
                    Cholesterol:
                  </Text>
                  <Text>{nutritionData.nf_cholesterol ?? "N/A"} mg</Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight="bold" color="teal.600">
                    Sodium:
                  </Text>
                  <Text>{nutritionData.nf_sodium ?? "N/A"} mg</Text>
                </GridItem>
              </Grid>
            </Box>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default NutritionSearch;
