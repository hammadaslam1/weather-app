import { AppBar, Avatar, Box, Button, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Avatar />
          <Button variant="contained">Hammad</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
