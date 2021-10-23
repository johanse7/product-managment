import styled from "styled-components"
import { displays } from "../../theme/base/Variables"

export const ProductDetailStyled = styled.section`
  ${displays.flexColumn}
  align-items: stretch;
  color: ${({ theme }) => theme.palette.grey50};
  padding: 1rem;

  & .title-product {
    font-size: 1.3rem;
  }

  & .content-price {
    font-size: 1.7rem;
    font-weight: 600;
  }
`

export const TitleDescription = styled.h3`
  color: ${({ theme }) => theme.palette.black};
  font-weight: 600;
  font-size: 1.4rem;
  margin: 1.5rem 0;
`
export const DescriptionStyled = styled.p`
  color: ${({ theme }) => theme.palette.grey30};
  font-size: 1rem;
  max-width: 600px;
`
