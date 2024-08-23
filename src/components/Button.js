import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3f51b5',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
  '&:active': {
    backgroundColor: '#1c2b7e',
  },
}));

export default function StyledButton({ children, ...props }) {
  return <CustomButton {...props}>{children}</CustomButton>;
}

