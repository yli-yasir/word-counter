import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "app.primary",
        color: "app.font",
      },
    },
  },
  fonts: {
    heading: "'Bakbak One', cursive",
    body: "'Bakbak One', cursive",
  },
  colors: {
    app: {
      primary: "#FEDBD0",
      secondary: "#EFCAC1",
      font: "#442C2E",
    },
  },
});

export default theme;
