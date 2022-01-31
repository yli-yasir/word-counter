import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "#fff0e9",
      },
    },
  },
  colors: {
    main: {
      100: "#fff0e9",
      300: "#fedbd0",
      600: "#efcac1",

      900: " #493133",
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
