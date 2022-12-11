import { ButtonStyled } from "./Button.styled";

type ButtonProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, onClick }: ButtonProps) => (
  <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
);
