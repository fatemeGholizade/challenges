import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { jssPreset, StylesProvider } from "@mui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import theme from "@/theme";

import { IChildren } from "./interface";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

export const MuiPorvider = ({ children }: IChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={cacheRtl}>
        <StylesProvider jss={jss}>{children}</StylesProvider>
      </CacheProvider>
    </ThemeProvider>
  );
};
