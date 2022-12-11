import { InfoItem, InfoItemProps } from "components/InfoItem";
import { LocalUserT } from "types";
import { UserInfoStyled } from "./UserInfo.styled";

import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as WebsiteIcon } from "assets/icon-website.svg";

type UserInfoProps = Pick<
  LocalUserT,
  "blog" | "company" | "location" | "twitter"
>;

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <CompanyIcon />,
      text: company,
    },
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <WebsiteIcon />,
      text: blog,
      isLink: true,
    },
  ];

  return (
    <UserInfoStyled>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </UserInfoStyled>
  );
};
