import { Box, Image } from '@chakra-ui/react';
import { motion, Transition, Variants } from 'framer-motion';

interface CompanyLogoProps {
  name: string;
  logo: string;
  delay: number;
}

const CompanyLogo = ({ name, logo, delay }: CompanyLogoProps) => {
  const transition: Transition = { duration: 0.5, delay: delay };
  const variants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition },
  };
  return (
    <Box
      as={motion.div}
      initial="initial"
      animate="animate"
      variants={variants}
      _hover={{ opacity: 1 }}
    >
      <Image
        src={logo}
        alt={name}
        filter="grayscale(100%)"
        transition="all 0.2s"
        _hover={{ filter: 'grayscale(0%)' }}
      />
    </Box>
  );
};

export default CompanyLogo;
