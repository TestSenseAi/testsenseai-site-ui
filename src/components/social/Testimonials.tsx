import {
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const companies = [
  {
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80',
  },
  {
    name: 'DevFlow',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80',
  },
  {
    name: 'CodeLabs',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80',
  },
  {
    name: 'TestPro',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80',
  },
];

const Testimonials = () => {
  return (
    <Box py={20} bg="brand.dark.200">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Text fontSize="lg" color="gray.400" textAlign="center">
            Trusted by leading development teams
          </Text>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
            {companies.map((company, index) => (
              <MotionBox
                key={company.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: index * 0.1 }}
                _hover={{ opacity: 1 }}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  filter="grayscale(100%)"
                  transition="all 0.2s"
                  _hover={{ filter: 'grayscale(0%)' }}
                />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Testimonials;
