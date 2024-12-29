import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CircuitBoard } from 'lucide-react';

const Hero = () => {
  const handleDashboardClick = () => {
    window.location.href = '/dashboard';
  };

  return (
    <Box
      id="home"
      minH="100vh"
      pt={32}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: 'radial(circle at 50% 50%, brand.dark.200, brand.dark.300)',
        opacity: 0.6,
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={8} alignItems="center" textAlign="center">
          <CircuitBoard size={64} color="#682AE9" />

          <Stack spacing={4} maxW="800px">
            <Heading
              as="h1"
              size="4xl"
              bgGradient="linear(to-r, brand.primary, brand.secondary)"
              bgClip="text"
              letterSpacing="tight"
            >
              TestSenseAi
            </Heading>

            <Heading as="h2" size="lg" fontWeight="normal" color="gray.300">
              AI-Powered Test Automation Framework
            </Heading>

            <Text fontSize="xl" color="gray.400">
              Generate, maintain, and optimize tests with ease. Let AI handle the complexity
              while you focus on delivering quality software.
            </Text>
          </Stack>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} pt={8}>
            <Button size="lg" variant="primary" onClick={handleDashboardClick}>
              Get Started
            </Button>
            <Button
              size="lg"
              variant="secondary"
              as="a"
              href="https://docs.testsense.ai"
              target="_blank"
            >
              View Documentation
            </Button>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;