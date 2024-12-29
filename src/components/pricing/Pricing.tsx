import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import PriceCard from './PriceCard';

const plans = [
  {
    title: 'Early Bird',
    price: 'TBA',
    features: [
      'Limited time offer',
      'Lifetime discount',
      'Priority access',
      'All Pro features',
      'Early adopter support',
    ],
    ctaText: 'Join Waitlist',
    isPopular: true,
  },
  {
    title: 'Pro',
    price: 'Coming Soon',
    features: [
      'Full access to AI features',
      'Team collaboration',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
    ctaText: 'Notify Me',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    features: [
      'Custom deployment',
      'Dedicated support',
      'SLA guarantees',
      'Advanced security',
      'Custom features',
    ],
    ctaText: 'Contact Us',
  },
];

const Pricing = () => {
  return (
    <Box id="pricing" py={24}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">Early Access Pricing</Heading>
            <Text fontSize="xl" color="gray.400" maxW="2xl">
              Be among the first to experience TestSenseAI at exclusive early
              adopter rates
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
            gap={8}
            w="full"
          >
            {plans.map(plan => (
              <PriceCard key={plan.title} {...plan} />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Pricing;
