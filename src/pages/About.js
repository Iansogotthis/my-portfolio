import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <Container maxWidth="md" style={{ paddingTop: '50px' }}>
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          I am a passionate developer with experience in creating high-quality web applications. My journey in coding started several years ago, and I have since honed my skills in various programming languages and frameworks. I am committed to continuous learning and improvement.
        </Typography>
      </Container>
    </motion.div>
  );
}

export default About;
