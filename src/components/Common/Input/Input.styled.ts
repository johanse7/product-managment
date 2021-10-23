import styled from "styled-components"

export const InputContainerStyled = styled.div`
  width: 100%;
  font-size: 1.125rem;

  & > label {
    color: ${({ theme }) => theme.palette.grey50};
  }

  & > .input {
    border: 1px solid ${({ theme }) => theme.palette.grey10};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.white};
    box-shadow: 0 2px 11px -4px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.palette.grey30};
    }

    &:focus {
      border: 3px solid ${({ theme }) => theme.palette.grey10};
    }
  }
`
