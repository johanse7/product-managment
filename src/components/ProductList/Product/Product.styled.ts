import styled from "styled-components"
import { displays } from "../../../theme/base/Variables"
import { LinkBase } from "../../../theme/common/Link.styled"

const ProductCardStyled = styled(LinkBase)`
  ${displays.flexBetween};
  color: ${({ theme }) => theme.palette.grey50};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey10};
  padding: 0.5rem 0;
  height: 100px;
  &:last-of-type {
    border: 0;
  }

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.palette.grey10};
  }

  & .content-price {
    font-size: 1.3rem;
    font-weight: 600;
  }
`

export default ProductCardStyled
