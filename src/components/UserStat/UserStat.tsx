import { LocalUserT } from "types";
import { UserStatStyled } from "./UserStat.styled";

export type UserStatProps = Pick<
  LocalUserT,
  "repos" | "followers" | "following"
>;

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <UserStatStyled>
    <ul>
      <li>
        <p>Repos</p>
        <span>{repos}</span>
      </li>
      <li>
        <p>Followers</p>
        <span>{followers}</span>
      </li>
      <li>
        <p>Following</p>
        <span>{following}</span>
      </li>
    </ul>
  </UserStatStyled>
);
