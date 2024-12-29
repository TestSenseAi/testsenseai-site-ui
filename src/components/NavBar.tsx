import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import Logo from './Logo';

const Navbar = () => {
  const navItems = [
    { label: 'Features', to: 'features' },
    { label: 'Pricing', to: 'pricing' },
    { label: 'FAQ', to: 'faq' },
  ];

  const handleDashboardClick = () => {
    window.location.href = '/dashboard';
  };

  return (
    <Box
      as="nav"
      position="fixed"
      w="full"
      zIndex={999}
      bg="brand.dark.300"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
      backdropFilter="blur(10px)"
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Logo />

          <HStack spacing={8}>
            {navItems.map(item => (
              <ChakraLink
                key={item.to}
                as={Link}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                fontSize="sm"
                fontWeight="medium"
                _hover={{ color: 'brand.primary' }}
                cursor="pointer"
              >
                {item.label}
              </ChakraLink>
            ))}

            <ChakraLink
              href="https://docs.testsense.ai"
              isExternal
              fontSize="sm"
              fontWeight="medium"
              _hover={{ color: 'brand.primary' }}
            >
              Docs
            </ChakraLink>

            <Button
              variant="secondary"
              size="sm"
              onClick={handleDashboardClick}
            >
              Sign In
            </Button>

            <Button variant="primary" size="sm">
              Talk to Us
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
