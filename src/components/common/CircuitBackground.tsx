import { Box } from '@chakra-ui/react';

const CircuitBackground = () => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      opacity={0.05}
      zIndex={0}
      bgImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0xMCAxMGgyMHYyMEgxMHptMjAgMGgyMHYyMEgzMHpNMTAgMzBoMjB2MjBIMTB6TTMwIDMwaDIwdjIwSDMweiIgc3Ryb2tlPSIjNjgyQUU5IiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')"
      bgRepeat="repeat"
      bgSize="60px 60px"
    />
  );
};

export default CircuitBackground;
