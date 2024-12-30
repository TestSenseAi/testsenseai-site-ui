import { Box, BoxProps } from '@chakra-ui/react';
import { motion, Transition, Variants } from 'framer-motion';

interface AnimatedBoxProps extends BoxProps {
  delay?: number;
}

const AnimatedBox = ({ children, delay = 0, ...props }: AnimatedBoxProps) => {
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
      {...props}
    >
      {children}
    </Box>
  );
};

export default AnimatedBox;
