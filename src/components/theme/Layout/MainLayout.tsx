import { ContentPage, MainContent } from "../../../theme/common/Container.styled"
import Header from "../../Header"

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <ContentPage>
        <MainContent>{children}</MainContent>
      </ContentPage>
    </>
  )
}

export default MainLayout
