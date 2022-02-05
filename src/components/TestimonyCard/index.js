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

export default function TestimonyCard({
  testimonial
}) {
  return (
    <OuteWrapper>
      <ContentWrapper>
        <QouteIcon src={process.env.PUBLIC_URL + "/assets/images/quote.png"} />
        <ContentInternalWrapper>
          <Heading>{testimonial.name}</Heading>
          <SubHeading>{testimonial.description}</SubHeading>
          <Paragraph>
          {testimonial.review}
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
