"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    orange: [
      "#fff2e1",
      "#ffe4cb",
      "#ffc99a",
      "#ffaa63",
      "#ff9136",
      "#ff8018",
      "#ff7805",
      "#e46600",
      "#cb5900",
      "#b14b00",
    ],
    yellow: [
      "#fff8e3",
      "#fff0cd",
      "#ffdf9c",
      "#ffcd66",
      "#febe3a",
      "#feb51f",
      "#ffb00f",
      "#e39a00",
      "#ca8900",
      "#af7500",
    ],
    "heavy-blue": [
      "#e7f1ff",
      "#d0ddff",
      "#9eb8fd",
      "#6991fa",
      "#3e70f8",
      "#245bf7",
      "#1451f8",
      "#0542dd",
      "#003ac7",
      "#0031af",
    ],
    blue: [
      "#ebf3ff",
      "#d8e4f8",
      "#b1c6ea",
      "#86a6dd",
      "#638bd1",
      "#4c7acc",
      "#4072ca",
      "#3061b3",
      "#2756a1",
      "#184a8f",
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
