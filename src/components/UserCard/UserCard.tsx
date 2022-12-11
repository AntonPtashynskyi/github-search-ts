import { UserCardStyled, BioStyled } from "./UserCard.styled";
import { UserStat } from "components/UserStat";
import { LocalUserT } from "types";
import { UserTitle } from "components/UserTitle";
import { UserInfo } from "components/UserInfo";

type UserCardProps = LocalUserT & {};

export const UserCard = (props: UserCardProps) => {
  return (
    <UserCardStyled>
      <img src={props.avatar} alt={props.login} />
      <div>
        <UserTitle
          created={props.created}
          login={props.login}
          name={props.name}
        />
        <BioStyled>{props.bio || "This profile has no bio"}</BioStyled>
        <UserStat
          followers={props.followers}
          following={props.following}
          repos={props.repos}
        />
        <UserInfo
          blog={props.blog}
          location={props.location}
          twitter={props.twitter}
          company={props.company}
        />
      </div>
    </UserCardStyled>
  );
};
