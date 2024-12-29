import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      py={4}
      px={8}
      mt={10}
      textAlign="center"
    >
      <Flex justify="center" align="center" direction="column">
        <Text mb={2}>© 2023 TestSenseAi</Text>
        <Flex gap={4}>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">GitHub</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
