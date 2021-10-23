import styled from "styled-components"


const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.palette.grey40};
  color: ${({ theme }) => theme.palette.white};
  font-size: 1.5rem;
  width: 100%;
  height: 70px;
  padding: 1rem;
`

export default HeaderStyled
