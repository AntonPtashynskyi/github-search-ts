import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { SearchStyled, ErrorStyled } from "./Search.styled";
import { Button } from "components/Button";

type SearchProps = {
  hasError: boolean;
  onSubmit: (text: string) => void;
};

type FormFields = {
  userName: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.userName.value;

    if (text) {
      onSubmit(text);
      e.currentTarget.reset();
    }
  };

  return (
    <SearchStyled onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="search">
          <SearchIcon />
        </label>
        <input
          type="text"
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
      </div>
      {hasError && <ErrorStyled>No result</ErrorStyled>}
      <Button>Search</Button>
    </SearchStyled>
  );
};
