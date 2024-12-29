import { Box, Container, Text } from '@chakra-ui/react';
import { Construction } from 'lucide-react';

const ComingSoonBanner = () => {
  return (
    <Box bg="brand.primary" py={2}>
      <Container maxW="container.xl">
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <Construction size={20} />
          <Text fontSize="sm" fontWeight="medium">
            🚀 Coming Soon - Join our waitlist to be the first to know when we
            launch!
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default ComingSoonBanner;
