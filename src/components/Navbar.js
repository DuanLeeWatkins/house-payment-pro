import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div">
            What's My Mortgage?
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
