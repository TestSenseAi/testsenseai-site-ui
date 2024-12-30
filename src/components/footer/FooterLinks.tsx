import { SimpleGrid, Stack, Text, Link } from '@chakra-ui/react';

const FooterLinks = () => {
  const links = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Documentation', href: 'https://docs.testsense.ai' },
    ],
    Company: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
    Legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
      {Object.entries(links).map(([category, items]) => (
        <Stack key={category} spacing={4}>
          <Text fontWeight="bold" color="gray.300">
            {category}
          </Text>
          {items.map(link => (
            <Link
              key={link.label}
              href={link.href}
              color="gray.400"
              _hover={{ color: 'white' }}
              transition="color 0.2s"
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default FooterLinks;
