import { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";

interface IDesktopLayoutProps {
  children: ReactNode;
};

const DesktopLayout: FC<IDesktopLayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box component="main" display="flex" flex="1" justifyContent="space-between" bgcolor="background.default">
        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            overflowX: "hidden",
            p: 4, 
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default DesktopLayout;
