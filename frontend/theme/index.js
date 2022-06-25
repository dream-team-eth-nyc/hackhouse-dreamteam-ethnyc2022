import {extendTheme} from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    background: "linear-gradient(117.56deg, #1B2037 42.84%, #0F1221 98.45%)",
    gray: {
      200: "#0F1221",
      800: "#1A202C"
    }
  },
  styles: {
    global: {
      body: {
        background: "background"
      }
    }
  }
})

export default theme;