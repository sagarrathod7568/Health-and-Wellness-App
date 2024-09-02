import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  useToast,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Center,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import physical from "../assets/physical.mp4";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const HealthGoals = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [showForm, setShowForm] = useState(true);
  const toast = useToast();

  const handleSearch = async () => {
    const key = "29159f105b44a9d01b96dc338554fa07";
    try {
      const response = await axios.post(
        "https://trackapi.nutritionix.com/v2/natural/exercise",
        { query },
        {
          headers: {
            "Content-Type": "application/json",
            "x-app-id": "39c5189d",
            "x-app-key": key,
          },
        }
      );
      setData(response.data.exercises[0]); // Assuming you want the first exercise
      setShowForm(false); // Hide form after getting data
    } catch (error) {
      toast({
        title: "Error fetching data.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Chart data and options
  const chartData = {
    labels: ["Calories Burned"],
    datasets: [
      {
        label: "Calories",
        data: [data ? data.nf_calories : 0],
        backgroundColor: "rgba(10, 147, 226, 0.2)",
        borderColor: "#4a0aeb",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "rgba(75, 192, 192, 1)",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <Box position="relative" minHeight="100vh">
      {/* Background Video */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        overflow="hidden"
        zIndex={-1}
      >
        <video
          src={physical}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* Foreground Content */}
      <Center>
        <Box
          p={5}
          maxW="800px"
          mx="auto"
          bg="rgba(255, 255, 255, 0.8)"
          borderRadius="md"
        >
          <Heading mb={4}>Health Goals Tracker</Heading>

          {showForm && (
            <>
              <FormControl mb={4}>
                <FormLabel htmlFor="query">Exercise Description</FormLabel>
                <Input
                  id="query"
                  placeholder="Describe your exercise"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel htmlFor="age">Age</FormLabel>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel htmlFor="gender">Gender</FormLabel>
                <Input
                  id="gender"
                  placeholder="Enter your gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel htmlFor="weight">Weight (kg)</FormLabel>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter your weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </FormControl>

              <Button colorScheme="teal" onClick={handleSearch}>
                Search
              </Button>
            </>
          )}

          {!showForm && data && (
            <Box mt={6}>
              <Card
                variant="outline"
                mb={6}
                p={4}
                _hover={{ bg: "gray.100", boxShadow: "lg" }}
              >
                <CardBody>
                  <Heading size="md">{data.user_input}</Heading>
                  <Text>Duration: {data.duration_min} minutes</Text>
                  <Text>Calories Burned: {data.nf_calories} kcal</Text>
                </CardBody>
              </Card>

              <Flex justifyContent="space-between" mt={6}>
                <Box flex="1" height="300px" mr={3}>
                  <Heading size="sm">Calories Burned (Bar Chart)</Heading>
                  <Bar data={chartData} options={chartOptions} />
                </Box>

                <Box flex="1" height="300px" ml={3}>
                  <Heading size="sm">Calories Burned (Pie Chart)</Heading>
                  <Pie data={chartData} options={chartOptions} />
                </Box>
              </Flex>

              <Button
                mt={6}
                colorScheme="teal"
                onClick={() => setShowForm(true)}
              >
                Go Back
              </Button>
            </Box>
          )}
        </Box>
      </Center>
    </Box>
  );
};

export default HealthGoals;
