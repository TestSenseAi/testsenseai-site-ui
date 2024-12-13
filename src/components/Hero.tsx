import { Container, Title, Text, Button, Group, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { Bot, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <Container size="lg" py={120}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Stack align="center" spacing="xl">
          <Group justify="center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Bot size={64} className="text-blue-500" />
            </motion.div>
          </Group>

          <div className="text-center">
            <Title className="text-7xl font-extrabold mb-4">TestSenseAI</Title>
            <Title order={2} className="text-4xl font-bold mb-6">
              Rest Easy,{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                Test Smart
              </Text>
            </Title>
            <Text c="dimmed" size="xl" maw={600} mx="auto" mb={40}>
              Revolutionize your QA process with AI-powered test automation.
              From Figma to production, we've got you covered.
            </Text>
          </div>

          <Group justify="center" gap="md">
            <Button
              size="xl"
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              rightSection={<ArrowRight size={20} />}
            >
              Start Testing Smarter
            </Button>
            <Button size="xl" variant="light">
              Watch Demo
            </Button>
          </Group>
        </Stack>
      </motion.div>
    </Container>
  );
}
