import { ReactNode } from "react";
import { ContainerStyled } from "./Container.styled";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <ContainerStyled>{children}</ContainerStyled>
);
