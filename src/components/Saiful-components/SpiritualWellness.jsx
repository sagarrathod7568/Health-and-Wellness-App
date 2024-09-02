import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import spiritual from "../assets/spiritual.jpg";

const SpiritualWellness = () => {
  return (
    <Box
      bgImage={`url(${spiritual})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minHeight="100vh"
      color="gray.700"
      p={4}
    >
      <VStack
        spacing={6}
        bg="rgba(244, 244, 244, 0.9)" // Slightly transparent background for readability
        p={6}
        borderRadius="lg"
        maxW="800px"
        mx="auto"
        mt={8}
      >
        <Heading as="h2" size="xl" textAlign="center">
          Spiritual Wellness
        </Heading>

        <Text fontSize="lg" textAlign="center">
          Spiritual wellness is a vital dimension of overall well-being,
          transcending religious boundaries to encompass the search for meaning,
          purpose, and connection to something greater than oneself.
        </Text>

        <VStack align="start" spacing={4} w="100%">
          <Box>
            <Heading as="h3" size="md">
              Take Time for Yourself -
            </Heading>
            <Text>
              Begin your journey towards spiritual wellness by engaging in
              regular self-reflection and mindfulness practices. Take moments to
              pause, breathe, and be fully present in the current moment.
              Meditation, deep breathing exercises, and mindful awareness can
              help you develop a greater understanding of your thoughts,
              emotions, and inner self.
            </Text>
          </Box>

          <Box>
            <Heading as="h3" size="md">
              Define your Beliefs -
            </Heading>
            <Text>
              Explore and clarify your personal values and beliefs. This
              introspective process involves understanding what matters most to
              you and aligning your actions with these principles. Whether
              rooted in religious traditions or personal philosophies, defining
              your values provides a foundation for spiritual well-being.
            </Text>
          </Box>

          <Box>
            <Heading as="h3" size="md">
              Connect with Nature -
            </Heading>
            <Text>
              Immerse yourself in the natural world to enhance your spiritual
              connection. Whether it's a stroll in the park, hiking in the
              mountains, or simply sitting in a garden, nature has a profound
              impact on spiritual wellness. Take time to appreciate the beauty
              around you and feel a sense of interconnectedness with the
              environment.
            </Text>
          </Box>

          <Box>
            <Heading as="h3" size="md">
              Do Things You Love -
            </Heading>
            <Text>
              Incorporate spiritual practices that resonate with you. This might
              include prayer, meditation, yoga, or other forms of contemplative
              activities. These practices can provide a sense of inner peace,
              clarity, and a connection to something beyond the immediate
              material world.
            </Text>
          </Box>

          <Box>
            <Heading as="h3" size="md">
              Learn from Others -
            </Heading>
            <Text>
              Explore spiritual teachings and wisdom from various sources.
              Attend religious services, read spiritual literature, or engage in
              discussions with those who share similar beliefs. Continuous
              learning and seeking guidance can deepen your understanding of
              spirituality and provide insights for personal growth.
            </Text>
          </Box>

          <Box>
            <Heading as="h3" size="md">
              Help Others and Be Kind -
            </Heading>
            <Text>
              Contribute to the well-being of others through acts of kindness
              and service. Helping those in need fosters a sense of purpose and
              fulfillment. Whether through volunteering, lending a helping hand,
              or expressing kindness, these actions contribute to a positive and
              spiritually enriching life.
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export default SpiritualWellness;
