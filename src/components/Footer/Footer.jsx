import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 2, bgcolor: 'primary.main', color: 'white' }}>
      <Typography variant="body2">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
