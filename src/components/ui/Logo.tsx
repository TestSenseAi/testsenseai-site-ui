import { Group, Text } from '@mantine/core';
import { Bot } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

const sizes = {
  sm: { icon: 24, text: 'lg' },
  md: { icon: 32, text: 'xl' },
  lg: { icon: 48, text: '2xl' },
};

export function Logo({ size = 'md', variant = 'light' }: LogoProps) {
  const { icon, text } = sizes[size];
  
  return (
    <Group gap="xs" wrap="nowrap">
      <Bot
        size={icon}
        className="text-blue-500"
      />
      <Text
        size={text}
        fw={700}
      >
        TestSense
        <Text component="span" c="blue" inherit>
          AI
        </Text>
      </Text>
    </Group>
  );
}