import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <Box
      p={8}
      bg="brand.dark.200"
      borderRadius="xl"
      border="1px solid"
      borderColor="whiteAlpha.100"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-4px)', borderColor: 'brand.primary' }}
    >
      <VStack spacing={4} align="flex-start">
        <Icon size={32} color="#682AE9" />
        <Heading size="md">{title}</Heading>
        <Text color="gray.400">{description}</Text>
      </VStack>
    </Box>
  );
};

export default FeatureCard;
