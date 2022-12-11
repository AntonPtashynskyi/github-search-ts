import { LocalUserT } from "types";
import { UserTitleStyled } from "./UserTitle.styled";

type UserTitleProps = Pick<LocalUserT, "name" | "login" | "created">;

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const UserTitle = ({ name, login, created }: UserTitleProps) => {
  const joinDate = localDate.format(new Date(created));

  return (
    <UserTitleStyled>
      <div>
        <h1>{name}</h1>
        <h2>@{login}</h2>
      </div>
      <p>Joined {joinDate}</p>
    </UserTitleStyled>
  );
};
