import { AppBar, Box, Toolbar } from "@mui/material";
const Navbar = () => {
  // very simple header components
  return (
    <>
      <Box height={64} />
      <AppBar
        position="fixed"
        sx={{
          height: 64,
          borderRadius: 0,
          zIndex: 30,
          backgroundColor: "#efefef",
          overflow: "hidden",
        }}
      >
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
