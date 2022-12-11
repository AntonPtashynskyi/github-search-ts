import styled from "styled-components";

type BioProps = {
  opacity: string,
};

export const UserCardStyled = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.userCardBg};
  box-shadow: ${({ theme }) => theme.userCardShadow};
  margin-top: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 20px;
  }

  img {
    width: 150px;
    height: 150px;
    margin-right: 20px;
    border-radius: 50%;
  }
`;

export const BioStyled = styled.p`
  color: ${({ theme }) => theme.bioColor};
  padding: 10px 0 0 0;
  /* opacity: ${(props) => props.opacity}; */
  // !TODO how to pass props in styled components
`;
