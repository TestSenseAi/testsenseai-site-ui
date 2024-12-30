import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box id="contact" py={24}>
      <Container maxW="container.xl">
        <VStack spacing={8} textAlign="center">
          <VStack spacing={4}>
            <Heading size="2xl">Ready to Transform Your QA Process?</Heading>
            <Text fontSize="xl" color="gray.400" maxW="2xl">
              Get in touch to learn more about enterprise options or
              personalized setups. Our team is ready to help you revolutionize
              your testing workflow.
            </Text>
          </VStack>

          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              (window.location.href = 'mailto:support@testsense.ai')
            }
          >
            Talk to Us
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
