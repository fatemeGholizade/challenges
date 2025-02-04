import { breakpoints } from "@/config/variables";

const typography = {
  fontFamily: "IRANSansX",
  h1: {
    fontSize: "32px",
    [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: "20px",
    },
  },
  h2: {
    fontSize: "24px",
    [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: "20px",
    },
  },
  subtitle1: {
    fontSize: "20px",
    [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: "18px",
    },
  },
  subtitle2: {
    fontSize: "18px",
    [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: "16px",
    },
  },
  body1: {
    fontSize: "16px",
    [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: "14px",
    },
  },
  body2: {
    fontSize: "14px",
    [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: "12px",
    },
  },
  caption: {
    fontSize: "12px",
    [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
      fontSize: "10px",
    },
  },
  overline: {
    fontSize: "10px",
  },
};
export default typography;
