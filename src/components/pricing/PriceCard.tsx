import {
  Box,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Check } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

const PriceCard = ({
  title,
  price,
  features,
  isPopular,
  ctaText,
}: PriceCardProps) => {
  return (
    <Box
      p={8}
      bg="brand.dark.200"
      borderRadius="xl"
      border="1px solid"
      borderColor={isPopular ? 'brand.primary' : 'whiteAlpha.100'}
      position="relative"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-4px)' }}
    >
      {isPopular && (
        <Box
          position="absolute"
          top={-3}
          right={8}
          bg="brand.primary"
          px={4}
          py={1}
          borderRadius="full"
          fontSize="sm"
          fontWeight="bold"
        >
          Popular
        </Box>
      )}

      <VStack spacing={6} align="stretch">
        <VStack spacing={2} align="flex-start">
          <Heading size="lg">{title}</Heading>
          <Box>
            <Text fontSize="3xl" fontWeight="bold">
              {price}
            </Text>
            {price !== 'Custom' && <Text color="gray.400">/month</Text>}
          </Box>
        </VStack>

        <List spacing={3}>
          {features.map(feature => (
            <ListItem key={feature} display="flex" alignItems="center">
              <ListIcon as={Check} color="brand.primary" />
              {feature}
            </ListItem>
          ))}
        </List>

        <Button
          variant={isPopular ? 'primary' : 'secondary'}
          size="lg"
          w="full"
        >
          {ctaText}
        </Button>
      </VStack>
    </Box>
  );
};

export default PriceCard;
