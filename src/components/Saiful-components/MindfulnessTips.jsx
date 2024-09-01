// src/components/MindfulnessTips.jsx
import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const MindfulnessTips = ({ mood }) => {
  const tips = {
    happy: "Great! Keep doing what makes you feel this way.",
    sad: "It's okay to feel sad. Take some time to relax and maybe listen to calming music.",
    anxious: "Try deep breathing exercises. Focus on the present moment.",
    calm: "Enjoy this moment of peace. Maybe do some meditation to prolong it.",
  };

  return (
    <Box padding="20px" boxShadow="md" borderRadius="md">
      <Heading mb={4}>Mindfulness Tip</Heading>
      <Text>{tips[mood]}</Text>
    </Box>
  );
};

export default MindfulnessTips;
