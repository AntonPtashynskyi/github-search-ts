import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/Global.styles";
import { lightTheme, darkTheme } from "styles/Theme.styles";
import { Container } from "components/Container";
import { TheHeader } from "components/TheHeader";
import { ThemeSwitcher } from "components/ThemeSwitcher";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";

import { defaultUser } from "mock";

function App() {
  const [isDark, setIsDark] = useState("light");
  const isDarkTheme = isDark === "dark";

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <TheHeader>
          <ThemeSwitcher setIsDark={setIsDark} isDarkTheme={isDarkTheme} />
        </TheHeader>
        <Search hasError={true} onSubmit={() => {}} />
        <UserCard {...defaultUser} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
