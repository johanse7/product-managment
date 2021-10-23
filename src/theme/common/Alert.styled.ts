import styled, { css } from "styled-components"
import { VariantAlertType } from "../../types/VariantAlertType"

const variantAlert = {
  success: css`
    background: ${({ theme }) => theme.palette.success};
  `,
  error: css`
    background: ${({ theme }) => theme.palette.error};
  `,
}

export const AlertStyled = styled.div<{ variant: VariantAlertType }>`
  padding: 1rem 0;
  ${({ variant }) => variantAlert[variant]}
  color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  width: 100%;
`
