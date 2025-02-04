import "./style.scss";

import { SnackbarProvider } from "notistack";

import { MuiPorvider, RouterProvider } from "@/providers";
function App() {
  return (
    // add muiprovider as main wrapper for general styling
    // wrap snack bar provider to be available every where
    <MuiPorvider>
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <RouterProvider />
      </SnackbarProvider>
    </MuiPorvider>
  );
}

export default App;
