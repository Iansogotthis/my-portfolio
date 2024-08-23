import React from 'react';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const AnimatedButton = styled(motion.button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function InteractiveButton({ children, ...props }) {
  return (
    <AnimatedButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </AnimatedButton>
  );
}

export default InteractiveButton;
