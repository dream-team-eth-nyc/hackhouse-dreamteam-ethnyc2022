import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    background: "linear-gradient(117.56deg, #1B2037 42.84%, #0F1221 98.45%)",
    primaryFontColor: {
      darkMode: "gray.50",
    },
    secondaryFontColor: {
      darkMode: "gray.50",
    },
  },
  textStyles: {
    heading1: {
      fontWeight: "bold",
      fontSize: "36px",
    },
    heading2: {
      fontWeight: "bold",
      fontSize: "26px",
    },
    subheading2: {
      fontWeight: "normal",
      fontSize: "20px",
    },
    label1: {
      fontSize: "12px",
      color: "gray.500",
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
    ModalContent: {
      baseStyle: {
        background: "gray.800",
      },
    },
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
