import React from "react";
import { FiStar } from "react-icons/fi";
import CardOutline from "../CardOutline";
import {
  TopCardWrapper,
  Content,
  ContentBottom,
  Heading,
  Image,
  ImageWrapper,
  LocationContainer,
  Paragraph,
  SubHeading,
  Title,
} from "./TopArticleCard.styled";

export default function TopArticleCard({
  article,
  showAuthorProfile,
  openArticle
}) {
  return (
    <TopCardWrapper>
      <ImageWrapper>
        <Image src={article.poster} />
      </ImageWrapper>
      <CardOutline radiusBottom={'5px'}>
        <Content onClick={() => showAuthorProfile()}>
          <Heading>{article.author.name}</Heading>
          <SubHeading>{article.author.shortDescription}</SubHeading>
          <LocationContainer>
            <SubHeading>{article.author.rating}</SubHeading>
            <SubHeading><FiStar/><FiStar/><FiStar/><FiStar/><FiStar/></SubHeading>
          </LocationContainer>
        </Content>
        <ContentBottom onClick={() => openArticle()}>
          <Title>{article.title}</Title>
          <Paragraph>{article.description}</Paragraph>
      </ContentBottom>
      </CardOutline>
    </TopCardWrapper>
  );
}
