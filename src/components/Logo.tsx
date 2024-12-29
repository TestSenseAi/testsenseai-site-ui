import { Box, Text } from '@chakra-ui/react';
import { CircuitBoard } from 'lucide-react';

const Logo = () => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <CircuitBoard size={32} color="#682AE9" />
      <Text fontSize="xl" fontWeight="bold">
        TestSenseAi
      </Text>
    </Box>
  );
};

export default Logo;
