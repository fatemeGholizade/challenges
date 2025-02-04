import { createTheme } from "@mui/material/styles";

import { IPalette } from "./interfaces";
import palette from "./palette";
import typography from "./typography";

const theme = createTheme({
  direction: "rtl",
  palette: palette as IPalette,
  typography: typography,
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          height: "30px",
          padding: "8px 16px",
        },
        sizeMedium: {
          height: "38px",
          padding: "8px 16px",
        },
        sizeLarge: {
          height: "56px",
          padding: "8px 16px",
        },
        root: {
          borderRadius: "8px",
          fontWeight: "500px",
          fontSize: "16px",
        },
        contained: {
          backgroundColor: palette.purple?.light,
          color: palette.natural?.main,
          boxShadow: "none !important",
          border: "1px solid transparent",
          "&:hover": {
            backgroundColor: `${palette.purple?.light} `,
          },
          "&.Mui-disabled": {
            background: `${palette.natural?.main} !important`,
            color: `${palette.natural?.main} !important`,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          textAlign: "center",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        input: {
          fontSize: "0.95rem",
          padding: "10px",
        },
        notchedOutline: {
          border: `1px solid ${palette.purple?.light} !important`,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: "translate(14px, 11px) scale(1)",
          fontSize: "0.85rem !important",
          color: `${palette.purple?.light} !important`,
        },
        shrink: {
          transform: "translate(10px, -9px) scale(0.82)",
          fontSize: "0.90rem !important",
          color: `${palette.purple?.main} !important`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          marginBottom: "10px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: palette.purple?.main,
          "&.Mui-checked": {
            color: palette.purple?.light,
          },
        },
      },
    },
  },
});

export default theme;
