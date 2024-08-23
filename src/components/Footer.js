import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
  return (
    <footer style={{ padding: '20px 0', marginTop: '20px', backgroundColor: '#f8f8f8' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
