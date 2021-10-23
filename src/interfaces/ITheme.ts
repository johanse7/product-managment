import { IButtonStyled } from "./IPropsButton"

export interface ITheme {
  palette: {
    primary: string
    secondary: string
    error: string
    success: string
    white: string
    grey10: string
    grey30: string
    grey40: string
    grey50: string

    black: string
  }
  fontSizes: {
    mainSize: string
    secondsize: string
  }

  button: {
    primary: IButtonStyled
  }
}
