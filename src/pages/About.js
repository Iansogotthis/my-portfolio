import React from 'react';
import { Container, Typography } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" style={{ paddingTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        I am a passionate developer with experience in creating high-quality web applications. My journey in coding started several years ago, and I have since honed my skills in various programming languages and frameworks. I am committed to continuous learning and improvement.
      </Typography>
    </Container>
  );
}

export default About;
