import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import spiritual from "../assets/social.jpg";
const SocialWellBeing = () => {
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
        bg="rgba(244, 244, 244, 0.9)"
        p={6}
        borderRadius="lg"
        maxW="800px"
        mx="auto"
        mt={8}
      >
        <Box>
          <Heading as="h2" size="xl" textAlign="center">
            Social Well-Being
          </Heading>
          <Text mt={4}>
            Explore the importance of meaningful connections and positive
            relationships. Learn how to build a supportive social network,
            nurture existing relationships, and create a sense of community for
            overall social well-being.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            • Meaningful Connections -
          </Heading>
          <Text mb={4}>
            Build and nurture meaningful connections with others. Engage in
            activities and conversations that foster a sense of belonging and
            understanding. Meaningful connections contribute to emotional
            well-being and create a support system in various aspects of life.
          </Text>
          <Text>
            Whether it's through shared interests, hobbies, or common goals,
            forming meaningful connections strengthens your social well-being.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            • Community Engagement -
          </Heading>
          <Text mb={4}>
            Get involved in your community and contribute positively.
            Participate in community events, volunteer for local causes, and
            engage with neighbors. Community engagement not only benefits others
            but also enhances your sense of purpose and social connection.
          </Text>
          <Text>
            Actively participating in community activities fosters a sense of
            responsibility and strengthens the social fabric of the community.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            • Communication Skills -
          </Heading>
          <Text mb={4}>
            Develop effective communication skills to express yourself clearly
            and empathetically. Good communication is essential for building and
            maintaining healthy relationships. Practice active listening,
            express your thoughts and feelings, and be open to understanding
            others.
          </Text>
          <Text>
            Effective communication contributes to resolving conflicts,
            strengthening connections, and creating a positive social
            environment.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            • Digital Well-Being -
          </Heading>
          <Text mb={4}>
            Maintain a healthy balance in your digital interactions. While
            technology connects us, it's important to prioritize face-to-face
            interactions and limit screen time. Practice digital mindfulness to
            ensure that online activities positively contribute to your social
            well-being.
          </Text>
          <Text>
            Create boundaries for digital use and be mindful of the impact of
            social media on your emotions and relationships.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default SocialWellBeing;
