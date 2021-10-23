import styled from "styled-components"

export const GridContainer = styled.section<{ minSize?: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${({ minSize }) => minSize || "300px"}, 1fr));
  gap: 1rem;
`
