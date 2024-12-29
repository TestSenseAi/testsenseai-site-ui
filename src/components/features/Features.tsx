import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { Brain, Gauge, GitBranch, Shield, Workflow } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'AI-Driven Test Generation',
    description:
      'Transform specifications and designs into comprehensive test scripts automatically.',
    icon: Brain,
  },
  {
    title: 'Multi-Platform Integrations',
    description: 'Seamlessly connect with Slack, Jira, and all major browsers.',
    icon: Workflow,
  },
  {
    title: 'Analytics & Insights',
    description:
      'Track coverage metrics, identify trends, and predict regression risks.',
    icon: Gauge,
  },
  {
    title: 'Easy Collaboration',
    description: 'Built-in version control and role-based access management.',
    icon: GitBranch,
  },
  {
    title: 'Scalable & Secure',
    description: 'Enterprise-grade security with unlimited scaling potential.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <Box id="features" py={24} bg="brand.dark.200">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">Features</Heading>
            <Text fontSize="xl" color="gray.400" maxW="2xl">
              Powerful tools to streamline your QA process and deliver quality
              software faster.
            </Text>
          </VStack>

          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={8}
          >
            {features.map(feature => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Features;
