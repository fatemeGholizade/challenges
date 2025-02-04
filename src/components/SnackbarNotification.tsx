import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";

interface ISnackbarNotificationProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  severity: "success" | "error";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />;
});

export const SnackbarNotification: React.FC<ISnackbarNotificationProps> = ({
  open,
  onClose,
  children,
  severity,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={10000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <Alert onClose={onClose} severity={severity}>
        {children}
      </Alert>
    </Snackbar>
  );
};
