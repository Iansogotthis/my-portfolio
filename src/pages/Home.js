import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container maxWidth="md" style={{ textAlign: 'center', paddingTop: '50px' }}>
        <Typography variant="h2" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1">
          Discover my projects and learn more about me.
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }} href="/projects">
          View My Work
        </Button>
      </Container>
    </motion.div>
  );
}

export default Home;
