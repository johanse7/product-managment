import { ThemeProvider } from "styled-components"
import { RecoilRoot } from "recoil"
import AppRouter from "../../routes/AppRouter"
import GlobalStyled from "../../theme/base/Global.styled"
import { defaultTheme } from "../../theme/ThemeUI"

const AppContainer = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default AppContainer
