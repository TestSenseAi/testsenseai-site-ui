import { Box, Container, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <Box py={12} borderTop="1px solid" borderColor="whiteAlpha.100">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <HStack spacing={6} wrap="wrap" justify="center">
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>
              Terms of Service
            </Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>
              Privacy Policy
            </Link>
            <Link
              href="https://github.com/testsense-ai"
              color="gray.400"
              _hover={{ color: 'white' }}
              display="flex"
              alignItems="center"
            >
              <Github size={20} style={{ marginRight: '0.5rem' }} />
              GitHub
            </Link>
          </HStack>

          <Text color="gray.500">
            © {new Date().getFullYear()} TestSenseAi. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
