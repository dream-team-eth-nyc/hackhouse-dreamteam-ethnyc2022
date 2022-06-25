import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    background: "linear-gradient(117.56deg, #1B2037 42.84%, #0F1221 98.45%)",
    gray: {
      200: "#0F1221",
      300: "#63B3ED",
      700: "#2D3748",
    },
    blue: {
      200: "#90CDF4",
      800: "#2A4365",
    },
    primaryFontColor: {
      darkMode: "gray.50",
    },
    secondaryFontColor: {
      darkMode: "gray.50",
    },
  },
  textStyles: {
    heading1: {
      fontFamily: "Inter",
      fontWeight: "bold",
      fontSize: "36px",
    },
  },
  styles: {
    global: {
      body: {
        color: "white",
        background: "background",
        height: "100vh",
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxWidth: 1200,
        px: 4,
        mx: "auto",
      },
    },
    Headings: {
      baseStyle: {
        color: "white",
      },
    },
    Button: {
      baseStyle: {
        height: "32px",
      },
      variants: {
        primary: {
          background: "blue.200",
          color: "blue.800",
          _hover: {
            background: "blue.300",
          },
        },
        secondary: {
          background: "transparent",
          borderWidth: "1px",
          borderColor: "gray.700",
          _hover: {
            background: "gray.700",
          },
          color: "white",
        },
        text: {
          background: "transparent",
          color: "white",
          _hover: {
            background: "gray.700",
          },
        },
      },
    },
  },
});

export default theme;
