import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const faqs = [
  {
    question: 'How does AI test generation work?',
    answer:
      "Our AI analyzes your application's specifications, UI designs, and existing test coverage to automatically generate comprehensive test scripts. It learns from your team's testing patterns and continuously improves its suggestions.",
  },
  {
    question: 'What integrations are available?',
    answer:
      'We integrate with popular tools like Slack, Jira, GitHub, GitLab, and all major browsers. Our API allows for custom integrations with your existing toolchain.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! We offer a 14-day free trial on our Pro plan with full access to all features. No credit card required.',
  },
  {
    question: 'What if I need more concurrency or specialized features?',
    answer:
      'Our Enterprise plan offers unlimited concurrency and can be customized to your specific needs. Contact our sales team to discuss your requirements.',
  },
];

const FAQ = () => {
  return (
    <Box id="faq" py={24} bg="brand.dark.200">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">Frequently Asked Questions</Heading>
            <Text fontSize="xl" color="gray.400" maxW="2xl">
              Got questions? We've got answers.
            </Text>
          </VStack>

          <Accordion allowMultiple w="full" maxW="3xl">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="lg"
                mb={4}
              >
                <AccordionButton py={4}>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} color="gray.400">
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Box>
  );
};

export default FAQ;
