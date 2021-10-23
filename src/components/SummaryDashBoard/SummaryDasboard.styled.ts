import styled from "styled-components"
import { displays } from "../../theme/base/Variables"
import { LinkBase } from "../../theme/common/Link.styled"


export const DasboardLinkCard = styled(LinkBase)<{ color?: string }>`
  padding: 1.5rem;
  ${displays.flexCenter};
  background: ${({ theme, color }) => color || theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};
  font-weight: 700;
  border-radius: 8px;
  height: 120px;
  font-size: 1.2rem;
`
