import {
  Box,
  Container,
  Divider,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Github } from 'lucide-react';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <Box py={12} borderTop="1px solid" borderColor="whiteAlpha.100">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <FooterLinks />

          <Divider borderColor="whiteAlpha.100" />

          <HStack
            spacing={6}
            justify="space-between"
            w="full"
            flexDir={{ base: 'column', md: 'row' }}
            gap={4}
          >
            <Text color="gray.500">
              © {new Date().getFullYear()} TestSenseAi. All rights reserved.
            </Text>

            <HStack spacing={6}>
              <Link
                href="https://github.com/testsense-ai"
                color="gray.400"
                _hover={{ color: 'white' }}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Github size={20} />
                GitHub
              </Link>
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
