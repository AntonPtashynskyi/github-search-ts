import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";
import { ThemeSwitcherStyled } from "./ThemeSwitcher.styled";

type ThemeSwitcherProps = {
  setIsDark?: any; //TODO, remove type any
  isDarkTheme?: boolean;
};

export const ThemeSwitcher = ({
  setIsDark,
  isDarkTheme,
}: ThemeSwitcherProps) => {
  const themeText = isDarkTheme ? "Dark" : "Light";
  const ThemeIcon = isDarkTheme ? MoonIcon : SunIcon;

  return (
    <ThemeSwitcherStyled
      onClick={() => setIsDark(isDarkTheme ? "light" : "dark")}
    >
      <span>{themeText}</span>
      <ThemeIcon />
    </ThemeSwitcherStyled>
  );
};
