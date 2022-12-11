import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.white};
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.mainHoverColor};
  }
`;
