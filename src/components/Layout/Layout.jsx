import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ minHeight: '80vh', py: 3 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
