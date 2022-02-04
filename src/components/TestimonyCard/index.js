import React from "react";
import {
  ContentWrapper,
  ImageWrapper,
  OuteWrapper,
  Heading,
  SubHeading,
  Paragraph,
  RoundImage,
  ContentInternalWrapper,
  QouteIcon,
} from "./testimonyCard.styled";

export default function TestimonyCard() {
  return (
    <OuteWrapper>
      <ContentWrapper>
        <QouteIcon src={process.env.PUBLIC_URL + "/assets/images/quote.png"} />
        <ContentInternalWrapper>
          <Heading>Kim Sandher</Heading>
          <SubHeading>CEO, Happy Studio</SubHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            efficitur gravida ipsum ac varius. Phasellus a ornare metus.
            Praesent non erat lorem. Quisque sed est nec sapien pellentesque
            sagittis. Vivamus iaculis sollicitudin ante, ut placerat enim
            posuere at.
          </Paragraph>
        </ContentInternalWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <RoundImage>
          <img
            src="https://pivotallawgroup.com/images/uploads/KimSandher.png"
            width={80}
          />
        </RoundImage>
      </ImageWrapper>
    </OuteWrapper>
  );
}
