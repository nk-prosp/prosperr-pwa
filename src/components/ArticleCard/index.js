import React from "react";
import { FiStar } from "react-icons/fi";
import CardOutline from "../CardOutline";
import {
  CalenderIcon,
  CardWrapper,
  Content,
  ContentBottom,
  EyeIcon,
  Heading,
  HorizontalViewContainer,
  Image,
  ImageWrapper,
  InfoContainer,
  Paragraph,
  RoundImage,
  SubHeading,
  Title,
} from "./ArticleCard.styled";

export default function ArticleCard({
  article,
  openArticle,
  showAuthorProfile,
}) {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={article.poster} />
      </ImageWrapper>
      <CardOutline radiusBottom={'5px'}>
        <Content onClick={() => openArticle()}>
          <Heading>{article.title}</Heading>
          <InfoContainer>
            <HorizontalViewContainer>
              <CalenderIcon />
              <SubHeading> {article.date}</SubHeading>
            </HorizontalViewContainer>
            <HorizontalViewContainer>
              <EyeIcon />
              <SubHeading> {article.view}</SubHeading>
            </HorizontalViewContainer>
          </InfoContainer>
        </Content>
        <ContentBottom >
          <HorizontalViewContainer>
            <RoundImage>
              <Image src={article.author.image} />
            </RoundImage>
            <Content onClick={() => showAuthorProfile()}>
              <Title>{article.author.name}</Title>
              <Paragraph>{article.author.shortDescription}</Paragraph>
            </Content>
          </HorizontalViewContainer>
        </ContentBottom>
      </CardOutline>
    </CardWrapper>
  );
}
