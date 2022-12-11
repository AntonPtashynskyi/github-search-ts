import styled from "styled-components";

export const HeaderStyled = styled.header`
  margin: 35px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyled = styled.div`
  color: ${({ theme }) => theme.headerColor};
  font-size: 1.75rem;
  line-height: 1.5;
  font-weight: 700;
  user-select: none;
`;
