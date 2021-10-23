import { ITheme } from "../interfaces/ITheme"
import { fontSizes } from "./base/Variables"

export const defaultTheme: ITheme = {
  palette: {
    primary: "#26F19C",
    secondary: "#F8B236",
    success: "#33CC9E",
    error: "#EA064C",
    grey10: "#EEEEEE",
    grey30: "#999999",
    grey40: "#2E2F42",
    grey50: "#666666",
    black: "#333333",
    white: "#FFFFFF",
  },
  button: {
    primary: {
      backgroundColor: "#26F19C",
      textColor: "#FFFFFF",
    },
  },
  fontSizes,
}
