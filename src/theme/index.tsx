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
          height: "40px",
          padding: "8px 16px",
        },
        sizeMedium: {
          height: "48px",
          padding: "8px 16px",
        },
        sizeLarge: {
          height: "56px",
          padding: "8px 16px",
        },
        root: {
          borderRadius: "24px",
          fontWeight: "500px",
          fontSize: "16px",
        },
        contained: {
          backgroundColor: palette.primary?.light,
          color: palette.natural?.main,
          boxShadow: "none !important",
          border: "1px solid transparent",
          "&:hover": {
            backgroundColor: `${palette.primary?.main} `,
          },
          "&.Mui-disabled": {
            background: `${palette.natural?.main} !important`,
            color: `${palette.natural?.main} !important`,
          },
        },
        text: {
          "&:hover": {
            backgroundColor: `${palette.primary?.light} `,
          },
          "&.Mui-disabled": {
            border: `1px solid ${palette.natural?.main} !important`,
            color: `${palette.natural?.main} !important`,
          },
        },
        outlined: {
          backgroundColor: "transparent",
          color: palette.primary?.main,
          border: `1px solid ${palette.primary?.light}`,
          "&.Mui-disabled": {
            border: `1px solid ${palette.natural?.main} !important`,
            color: `${palette.natural?.main} !important`,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
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
          padding: "12px",
        },
        notchedOutline: {
          border: `1px solid ${palette.natural?.main} !important`,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: "translate(14px, 11px) scale(1)",
          fontSize: "0.85rem !important",
        },
        shrink: {
          transform: "translate(10px, -9px) scale(0.82)",
          fontSize: "0.90rem !important",
          color: `${palette.natural?.main} !important`,
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
          color: palette.primary?.main,
          "&.Mui-checked": {
            color: palette.secondary?.main,
          },
        },
      },
    },
  },
});

export default theme;
