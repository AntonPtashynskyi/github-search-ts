import styled from "styled-components";

export const ThemeSwitcherStyled = styled.div`
  display: flex;
  align-items: center;
  row-gap: 1rem;
  cursor: pointer;
  user-select: none;

  span {
    color: ${({ theme }) => theme.switcherColor};
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    transition: all 250ms ease-in;
  }

  svg {
    fill: ${({ theme }) => theme.switcherColor};
    transition: all 250ms ease-in;
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.switcherColorHover};
    }

    svg {
      fill: ${({ theme }) => theme.switcherColorHover};
    }
  }
`;
