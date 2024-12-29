import { Box, Flex, Link, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      bg="gray.900"
      color="white"
      py={4}
      px={8}
      position="fixed"
      width="100%"
      zIndex={1000}
    >
      <Flex justify="space-between" align="center">
        <Box fontSize="xl" fontWeight="bold">
          TestSenseAi
        </Box>
        <Flex as="nav" gap={4}>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Contact Us</Link>
          <Button colorScheme="teal" variant="outline">
            Sign In
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
