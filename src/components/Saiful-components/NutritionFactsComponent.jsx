import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  Heading,
  VStack,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import foodVideo from "./assets/food_photo.mp4"; // Adjust the path according to your folder structure

const key = "29159f105b44a9d01b96dc338554fa07";

const NutritionFactsComponent = () => {
  const [foodInput, setFoodInput] = useState("");
  const [nutritionData, setNutritionData] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component is mounted
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchNutrition = async () => {
    const foodItems = foodInput.split(",").map((item) => item.trim());

    try {
      const response = await fetch(
        `https://trackapi.nutritionix.com/v2/natural/nutrients`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-app-id": "39c5189d",
            "x-app-key": key,
          },
          body: JSON.stringify({ query: foodItems.join(", ") }),
        }
      );
      const data = await response.json();

      const totals = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
      };

      data.foods.forEach((food) => {
        totals.calories += food.nf_calories;
        totals.protein += food.nf_protein;
        totals.carbohydrates += food.nf_total_carbohydrate;
        totals.fat += food.nf_total_fat;
      });

      setNutritionData({
        items: data.foods,
        totals: totals,
      });
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
    }
  };

  return (
    <Box
      style={{ paddingTop: "100px" }}
      position="relative"
      minHeight="100vh"
      overflow="hidden"
    >
      {/* Background Video */}
      <Box
        as="video"
        src={foodVideo}
        autoPlay
        loop
        muted
        playsInline
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex="-1"
      />

      {/* Content */}
      <Box
        p={8}
        maxW="900px"
        mx="auto"
        color="white"
        backdropFilter="blur(10px)"
        borderRadius="md"
      >
        <VStack spacing={6}>
          <Heading as="h1" size="lg" mb={4}>
            Nutrition Facts Checker
          </Heading>
          <Input
            ref={inputRef} // Set the ref to the input field
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
            placeholder="Enter food items separated by commas"
            size="md"
            variant="filled"
            color="black"
            _placeholder={{ color: "gray.600" }}
          />
          <Button colorScheme="teal" onClick={fetchNutrition} width="full">
            Get Nutrition Info
          </Button>

          {nutritionData && (
            <Box width="full" mt={8}>
              <Heading as="h2" size="md" mb={6}>
                Nutrition Information
              </Heading>
              <Flex wrap="wrap" justify="space-between" gap={4}>
                {nutritionData.items.map((food, index) => (
                  <Box
                    key={index}
                    p={4}
                    borderWidth="1px"
                    borderRadius="lg"
                    width={["100%", "45%"]}
                    boxShadow="md"
                    backgroundColor="rgba(0, 128, 128, 0.9)"
                    color="white"
                    transition="all 0.3s"
                    _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
                  >
                    <Heading
                      as="h3"
                      size="sm"
                      mb={4}
                      textAlign="center"
                      textTransform="uppercase"
                    >
                      {food.food_name}
                    </Heading>
                    <Grid templateColumns="1fr 1fr" gap={4}>
                      <GridItem>
                        <Text fontWeight="bold">Calories:</Text>
                        <Text>{food.nf_calories}</Text>
                      </GridItem>
                      <GridItem>
                        <Text fontWeight="bold">Protein:</Text>
                        <Text>{food.nf_protein}g</Text>
                      </GridItem>
                      <GridItem>
                        <Text fontWeight="bold">Carbohydrates:</Text>
                        <Text>{food.nf_total_carbohydrate}g</Text>
                      </GridItem>
                      <GridItem>
                        <Text fontWeight="bold">Fat:</Text>
                        <Text>{food.nf_total_fat}g</Text>
                      </GridItem>
                    </Grid>
                  </Box>
                ))}
              </Flex>

              <Box
                mt={8}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
                backgroundColor="rgba(0, 128, 128, 0.9)"
                color="white"
              >
                <Heading as="h3" size="md" mb={4} textAlign="center">
                  Total Nutritional Summary
                </Heading>
                <Grid templateColumns="1fr 1fr" gap={4}>
                  <GridItem>
                    <Text fontWeight="bold">Total Calories:</Text>
                    <Text>{nutritionData.totals.calories}</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontWeight="bold">Total Protein:</Text>
                    <Text>{nutritionData.totals.protein}g</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontWeight="bold">Total Carbohydrates:</Text>
                    <Text>{nutritionData.totals.carbohydrates}g</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontWeight="bold">Total Fat:</Text>
                    <Text>{nutritionData.totals.fat}g</Text>
                  </GridItem>
                </Grid>
              </Box>
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default NutritionFactsComponent;
