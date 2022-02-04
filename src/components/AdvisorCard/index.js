import React from "react";
import CardOutline from "../CardOutline";
import {
  ActionButton,
  AdvisorCardWrapper,
  Content,
  Heading,
  Icon,
  Image,
  ImageWrapper,
  LocationContainer,
  LocationIcon,
  SubHeading,
} from "./advisorCard.styled";

export default function AdvisorCard({advisor, showProfile, contactAdvisor}) {
  return (
    <AdvisorCardWrapper>
      <ImageWrapper>
        <Image src={advisor.image} />
      </ImageWrapper>
      <CardOutline>
        <Content onClick={() => showProfile()}>
          <Heading>{advisor.title}</Heading>
          <SubHeading>{advisor.shortDescription}</SubHeading>
          <LocationContainer>
            <LocationIcon />
            {/* <Icon src={'./assets/icons/ic_location.svg'} height={24} width={24}/> */}
            <SubHeading>{advisor.location}</SubHeading>
          </LocationContainer>
        </Content>
      </CardOutline>
      <ActionButton onClick={() => contactAdvisor()}>Contact Advisor</ActionButton>
    </AdvisorCardWrapper>
  );
}
