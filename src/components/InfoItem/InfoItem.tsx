import { InfoItemStyled } from "./InfoItem.styled";

export type InfoItemProps = {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
};

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || "not available";
  let currentHref: string = "";

  if (isLink) {
    currentHref = text && text.startsWith("http") ? text : `https://${text}`;
  }
  return (
    <InfoItemStyled>
      {icon}
      <div>
        {isLink && text ? (
          <a href={currentHref} target="_blank" rel="noreferrer">
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </InfoItemStyled>
  );
};
