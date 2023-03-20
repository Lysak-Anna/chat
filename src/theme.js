import { extendTheme } from "@chakra-ui/react";

const colors = {
  accent: "#6f63ad",
  yellow: "#fcf201",
  light: "#f3f3f3",
};
const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

export const theme = extendTheme({ colors, breakpoints });
