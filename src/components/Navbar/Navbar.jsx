import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const NavButton = styled(Button)(({ theme }) => ({
    color: "black",
  }));

const Navbar = () => {
  return (
    <AppBar position="static"  sx={{ backgroundColor: 'white'}}>
      <Toolbar
      sx={{
        display: "flex",          // Enable flexbox layout
        justifyContent: "space-between", // Space between items
        alignItems: "center",     // Vertically center items
      }}
      >
        {/* Left Section */}
        <Typography variant="h6" component="div"
        sx={{ color: 'orange' }} // Change the text color
        >
          MyApp
        </Typography>

        {/* middle section */}
        <Box
        sx={{
            display: "flex",
            gap: 2, // Space between elements
          }}
        >
        <NavButton color="inherit" component={Link} to="/">Home</NavButton>
        <NavButton color="inherit" component={Link} to="/loans">Loans</NavButton>
        <NavButton color="inherit" component={Link} to="/designs">Designs</NavButton>
        <NavButton color="inherit" component={Link} to="/professionals">Professionals</NavButton>
        <NavButton color="inherit" component={Link} to="/materials">Materials</NavButton>
        </Box>

        {/* Right Section */}
        <NavButton color="inherit">Login</NavButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
