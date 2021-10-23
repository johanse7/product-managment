import styled from "styled-components"
import { displays } from "../../theme/base/Variables"

const ProductFormStyled = styled.form`
  padding: 1.5rem;
  ${displays.flexColumn};
  gap: 1rem;

  & .error-message {
    color: ${({ theme }) => theme.palette.error};
    align-self: flex-start;
  }

  & .has-error {
    border: 1px solid ${({ theme }) => theme.palette.error};
  }
`
export default ProductFormStyled
