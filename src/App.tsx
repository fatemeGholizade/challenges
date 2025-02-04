import "./style.scss";
import { SnackbarProvider } from "notistack";
import {  MuiPorvider, RouterProvider } from "@/providers";
import { ConnectionProvider } from "./providers/ConnectionProvider";
function App() {
  return (
          <MuiPorvider>
            <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
              <ConnectionProvider>
                <RouterProvider />
              </ConnectionProvider>
            </SnackbarProvider>
          </MuiPorvider>
  );
}

export default App;
