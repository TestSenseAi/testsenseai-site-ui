import { Container, Group, Button } from '@mantine/core';
import { Logo } from '../ui/Logo';

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-dark-800/80 border-b border-gray-200 dark:border-dark-700">
      <Container size="lg" py="md">
        <Group justify="space-between" wrap="nowrap">
          <Logo />
          <Group gap="md">
            <Button variant="subtle">Documentation</Button>
            <Button variant="subtle">Pricing</Button>
            <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
              Get Started
            </Button>
          </Group>
        </Group>
      </Container>
    </header>
  );
}