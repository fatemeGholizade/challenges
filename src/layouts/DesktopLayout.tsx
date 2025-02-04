import { Box, Container } from "@mui/material";
import { FC, ReactNode } from "react";

import Navbar from "@/components/Navbar";

interface IDesktopLayoutProps {
  children: ReactNode;
}

const DesktopLayout: FC<IDesktopLayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Navbar />
      <Box component="main" display="flex" flex="1" justifyContent="space-between">
        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            overflowX: "hidden",
            paddingTop: 4,
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default DesktopLayout;
