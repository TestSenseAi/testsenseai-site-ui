import { Container, SimpleGrid, Title, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { Figma, GitBranch, Cpu, Monitor } from 'lucide-react';
import type { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Figma to Page Object',
    description:
      'Automatically generate page objects from your Figma designs, saving hours of manual work.',
    icon: <Figma size={32} />,
  },
  {
    title: 'Pipeline Integration',
    description:
      'Seamlessly integrate with your CI/CD pipeline for automated testing on every commit.',
    icon: <GitBranch size={32} />,
  },
  {
    title: 'AI-Powered Generation',
    description:
      'Let AI analyze your application and generate comprehensive test scenarios.',
    icon: <Cpu size={32} />,
  },
  {
    title: 'Cross-Platform Testing',
    description:
      'Test across multiple browsers and devices with a single command.',
    icon: <Monitor size={32} />,
  },
];

export function Features() {
  return (
    <Container size="lg" py={80}>
      <Title order={2} ta="center" mb={50}>
        Powerful Features for Modern Testing
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={30}>
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6 rounded-lg bg-gray-800 h-full">
              <div className="mb-4 text-blue-400">{feature.icon}</div>
              <Text size="lg" fw={500} mb={2}>
                {feature.title}
              </Text>
              <Text size="sm" c="dimmed">
                {feature.description}
              </Text>
            </div>
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
}
