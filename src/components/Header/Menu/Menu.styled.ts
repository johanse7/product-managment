import styled, { css } from "styled-components"
import { respondTo } from "../../../theme/base/Mixins"
import { displays } from "../../../theme/base/Variables"

export const NavBarStyled = styled.nav<{ open: boolean }>`
  ${displays.flexBetween};
  max-width: 980px;
  margin: 0 auto;

  & .logo {
    color: ${({ theme }) => theme.palette.white};
    ${displays.flexBase};
    gap: 1rem;
  }

  & .menu {
    background: ${({ theme }) => theme.palette.grey40};
    color: ${({ theme }) => theme.palette.white};
    list-style: none;
    ${displays.flexColumn};
    justify-content: flex-start;
    gap: 1.5rem;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    transition: opacity 0.3s;
    z-index: 9999;

    & a {
      ${displays.flexBase};
      align-items: center;
      gap: 1rem;
      color: ${({ theme }) => theme.palette.white};
      text-transform: uppercase;
      font-size: 1rem;
      border-bottom: 2px solid transparent;
      padding: 7px 0;

      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.palette.grey30};
      }
    }

    ${({ open }) =>
      open
        ? css`
            opacity: 1;
            pointer-events: all;
          `
        : css`
            opacity: 0;
            pointer-events: none;
          `}
  }

  & .open-menu,
  .close-menu {
    display: block;
    border: none;
    background: none;
    cursor: pointer;
    & > svg {
      color: ${({ theme }) => theme.palette.white};
    }
  }

  & .close-menu {
    align-self: flex-end;
    padding: 20px 15px;
  }

  ${respondTo.sm`
          & .menu{
               flex-direction: row;
                margin: 0;
                padding: 0;
                opacity: 1;
                pointer-events: all;
                position:initial;
                background:none;
                width: unset;
              }

         & .open-menu,
          .close-menu {
             display: none;
          }
          `}
`
