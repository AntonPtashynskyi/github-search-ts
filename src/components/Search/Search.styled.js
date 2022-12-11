import styled from "styled-components";

export const SearchStyled = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.searchBg};
  padding: 10px 20px;
  border-radius: 10px;
  max-width: 100%;
  box-shadow: ${({ theme }) => theme.searchShadow};

  div {
    display: flex;
    align-items: center;
    width: 90%;
  }

  label {
    margin-right: 15px;
  }

  input {
    width: 80%;
    height: 100%;
    font-size: 16px;
    color: ${({ theme }) => theme.searchColor};
    background-color: ${({ theme }) => theme.searchBg};
    border: none;
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.searchPlaceholderColor};
    }
  }
`;

export const ErrorStyled = styled.span`
  position: absolute;
  right: 50%;
  bottom: 80px;
  color: ${({ theme }) => theme.errorColor};
  font-weight: 700;
`;
