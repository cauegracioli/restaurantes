"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    orange: [
      "#fff8e1",
      "#ffefcc",
      "#ffdd9b",
      "#ffca64",
      "#ffba38",
      "#ffb01b",
      "#ffab09",
      "#e39500",
      "#ca8500",
      "#af7100",
    ],
  },
  primaryColor: "orange",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});
