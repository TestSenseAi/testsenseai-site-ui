import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Brain, Zap, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const highlights = [
  {
    icon: Brain,
    title: 'AI-Powered Testing',
    description:
      'Generate comprehensive test suites automatically with our advanced AI engine',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Run thousands of tests in parallel with our distributed testing infrastructure',
  },
  {
    icon: Shield,
    title: 'Reliable Coverage',
    description:
      'Ensure maximum test coverage with intelligent test case generation',
  },
  {
    icon: Clock,
    title: 'Time Saving',
    description:
      'Reduce testing time by up to 80% with automated test maintenance',
  },
];

const FeatureHighlight = () => {
  return (
    <Box py={20} bg="whiteAlpha.50">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={8}
        px={8}
        maxW="container.xl"
        mx="auto"
      >
        {highlights.map((highlight, index) => (
          <MotionBox
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            p={6}
            borderRadius="lg"
            bg="whiteAlpha.50"
            borderWidth="1px"
            borderColor="whiteAlpha.100"
            _hover={{
              transform: 'translateY(-4px)',
              borderColor: 'brand.primary',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <VStack spacing={4} align="flex-start">
              <highlight.icon size={24} color="#682AE9" />
              <Heading size="md">{highlight.title}</Heading>
              <Text color="gray.400">{highlight.description}</Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeatureHighlight;
