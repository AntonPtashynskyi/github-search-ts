import styled from "styled-components";

export const UserStatStyled = styled.div`
  align-self: flex-end;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.statBg};
  color: ${({ theme }) => theme.statColor};
  width: 100%;

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 5px;

      p {
        margin: 0;
      }

      span {
        font-weight: 700;
      }
    }
  }
`;
