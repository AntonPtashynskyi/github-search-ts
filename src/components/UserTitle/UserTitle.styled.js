import styled from "styled-components";

export const UserTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  h1 {
    font-size: 22px;
    color: ${({ theme }) => theme.titleColor};
  }

  h2 {
    font-size: 18px;
    color: ${({ theme }) => theme.loginColor};
  }

  p {
    align-self: flex-end;
    color: ${({ theme }) => theme.titleColor};
  }
`;
