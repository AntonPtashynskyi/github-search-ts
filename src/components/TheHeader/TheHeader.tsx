import { ReactNode } from "react";
import { HeaderStyled, LogoStyled } from "./Header.styled";

type TheHeaderProps = {
  children?: ReactNode;
};

export const TheHeader = ({ children }: TheHeaderProps) => (
  <HeaderStyled>
    <LogoStyled>DevFinder</LogoStyled>
    {children}
  </HeaderStyled>
);
