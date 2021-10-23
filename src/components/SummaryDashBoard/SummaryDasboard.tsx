import { ISummaryDasboard } from "../../interfaces/ISummaryDasboard"
import { GridContainer } from "../../theme/common/Grid.styled"
import { DasboardLinkCard } from "./SummaryDasboard.styled"

const SummaryDasboard = ({ countProducts }: ISummaryDasboard) => {
  return (
    <GridContainer minSize={"350px"}>
      <DasboardLinkCard to="/products">
        <span>Products({countProducts})</span>
      </DasboardLinkCard>
      <DasboardLinkCard color="#F8B236" to="/create">
        <span>Create a new product</span>
      </DasboardLinkCard>
    </GridContainer>
  )
}

export default SummaryDasboard
