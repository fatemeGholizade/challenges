import "./style.scss";

import { SnackbarProvider } from "notistack";

import { MuiPorvider, RouterProvider } from "@/providers";
function App() {
  return (
    <MuiPorvider>
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <RouterProvider />
      </SnackbarProvider>
    </MuiPorvider>
  );
}

export default App;
