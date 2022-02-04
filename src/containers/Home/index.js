import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setUserAuthenticatedFalse,
  setUserAuthenticatedTrue,
} from "./store/actions";
import TopArticleCard from "../../components/TopArticleCard";
import Header from "../../components/Header";
import {
  AdvisorCardContainer,
  AdvisorCardContainerInternal,
  AdvisorContainerWrapper,
  AlignItemCenterHorizontally,
  BoldHeading,
  CoresoulWrapper,
  Heading,
  Image,
  ImageWrapper,
  PromoContainer,
  PromoText,
  PromoWrapper,
  SecondaryButton,
  SubHeading,
  Tab,
  TabText,
  TabWrapper,
  TestimonialWrapper,
  TestimonyConatainer,
  TopArticleContainerInternal,
  TopArticleWrapper,
  TrendingTopicsWrapper,
  ViewAllAdvisorButton,
  WhatProsperrDoesContent,
  WhatProsperrDoesWrapper,
  FooterWrapper,
  Paragraph,
  EmailInputBox,
  MailIcon,
  CallIcon,
  AlignItemHorizontally,
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  BottomMenu,
  BottomSubMenu,
  Margin,
} from "./index.styled";
import AdvisorCard from "../../components/AdvisorCard";
import { FiArrowRight } from "react-icons/fi";
import ArticleCard from "../../components/ArticleCard";
import TestimonyCard from "../../components/TestimonyCard";
import constants from "./constants";

const Index = (props) => {

  const [selectedTabForAdvisors, setSelectedTabForAdvisors] = useState(constants.prosperrAdvisors.tabs[0]);
  const [advisors, setAdvisors] = useState(constants.prosperrAdvisors.topAdvisors);
  // useEffect(() => {
  //   console.log(props);
  // }, [props.auth]);

  //handle advisors tab clicks
  useEffect(() => {
    if(selectedTabForAdvisors == constants.prosperrAdvisors.tabs[0]){
      setAdvisors(constants.prosperrAdvisors.topAdvisors)
    }else{
      setAdvisors(constants.prosperrAdvisors.nearAboutAdvisors)
    }
  }, [selectedTabForAdvisors]);


  // showAdvisorProfile
  const showProfile = (item) => {
    console.log("show profile",item);
  }

  // showProfile
  const contactAdvisor = (item) => {
    console.log("contact",item);
  }

  // showProfile
  const openArticle = (item) => {
    console.log("article",item);
  }

  // showProfile
  const showAuthorProfile = (item) => {
    console.log("author",item);
  }

  return (
    <div>
      <Header />
      <BoldHeading>{constants.heading}</BoldHeading>
      <SubHeading>{constants.subHeading}</SubHeading>
      <CoresoulWrapper>
        <img src={constants.topCover} width={"100%"} />
      </CoresoulWrapper>

      <AdvisorContainerWrapper>
        <Heading>{constants.prosperrAdvisors.heading}</Heading>
        <SubHeading>{constants.prosperrAdvisors.subHeading}</SubHeading>
        <TabWrapper>
          {constants.prosperrAdvisors.tabs.map((item, index) => {
            return (
              <Tab key={index}>
                <TabText
                  isActive={selectedTabForAdvisors === item}
                  onClick={() => setSelectedTabForAdvisors(item)}
                >{item}</TabText>
              </Tab>
            );
          })}
        </TabWrapper>
        <AdvisorCardContainer>
          <AdvisorCardContainerInternal>
            {advisors.map((item, index) => {
              return <AdvisorCard key={index} advisor={item} contactAdvisor={() => contactAdvisor(item)} showProfile={()=>showProfile(item)}/>
            })}
          </AdvisorCardContainerInternal>
          <ViewAllAdvisorButton>
            View All Advisors <FiArrowRight />
          </ViewAllAdvisorButton>
        </AdvisorCardContainer>
        <TopArticleWrapper>
          <Heading>{constants.topArticles.heading}</Heading>
          <SubHeading>
          {constants.topArticles.subHeading}
          </SubHeading>
        </TopArticleWrapper>
        <TopArticleContainerInternal>
        {constants.topArticles.articles.map((item, index)=>{
          return <TopArticleCard key={index} article={item} showAuthorProfile={() => showAuthorProfile(item.author)} openArticle={() => openArticle(item)}/>
        })}
        </TopArticleContainerInternal>
        <AlignItemCenterHorizontally>
          <SecondaryButton>SEE ALL ARTICLES</SecondaryButton>
        </AlignItemCenterHorizontally>
      </AdvisorContainerWrapper>
      <TrendingTopicsWrapper>
        <Heading>{constants.trendingTopics.heading}</Heading>
        <SubHeading>{constants.trendingTopics.subHeading}</SubHeading>
        <TopArticleContainerInternal>
          {constants.trendingTopics.topics.map((item, index)=>{
            return <ArticleCard key={index} article={item} openArticle={() => openArticle(item)} showAuthorProfile={() => showAuthorProfile(item.author)}/>
          })}
        </TopArticleContainerInternal>
        <AlignItemCenterHorizontally>
          <SecondaryButton>SEE ALL TOPICS</SecondaryButton>
        </AlignItemCenterHorizontally>
      </TrendingTopicsWrapper>
      <PromoWrapper>
        <PromoContainer>
          <ImageWrapper>
            <Image src="https://pivotallawgroup.com/images/uploads/KimSandher.png" />
          </ImageWrapper>
          <PromoText>Keep learning in the moments that matter.</PromoText>
        </PromoContainer>
      </PromoWrapper>
      <WhatProsperrDoesWrapper>
        <Heading>What Prosperr does for you?</Heading>
        <TabWrapper>
          <Tab>
            <TabText isActive>Market Analysis</TabText>
          </Tab>
          <Tab>
            <TabText>Trending Financial Topics</TabText>
          </Tab>
        </TabWrapper>
        <WhatProsperrDoesContent>
          <Heading left lines={2}>
            Your contribution rate: a little extra can help make a big
            difference
          </Heading>
          <SubHeading left>
            How much you contribute to your retirement plan today can make a big
            difference in how much you have when you're ready to retire. Just
            increasing your contribution rate from 4% to 6% could add over
            Rs.101,000 to your nest egg over 30 years, assuming a Rs.50,000
            salary.
          </SubHeading>
        </WhatProsperrDoesContent>
      </WhatProsperrDoesWrapper>
      <TestimonialWrapper>
        <Heading color="#fff">Testimonials</Heading>
        <SubHeading color="#fff">
          Here’s what the champions think about us.
        </SubHeading>
        <TestimonyConatainer>
          <AlignItemCenterHorizontally>
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
          </AlignItemCenterHorizontally>
        </TestimonyConatainer>
      </TestimonialWrapper>
      <FooterWrapper>
        <Heading left color="#fff">
          PROSPERR.IO
        </Heading>
        <Paragraph color="#fff">Get our Weekly Newsletter</Paragraph>
        <EmailInputBox placeholder="Enter ID" />
        <br></br>
        <SecondaryButton>SUBSCRIBE</SecondaryButton>

        <AlignItemHorizontally>
          <MailIcon />
          <Paragraph color="#fff">hi@prosperr.io</Paragraph>
        </AlignItemHorizontally>
        <AlignItemHorizontally>
          <CallIcon />
          <Paragraph color="#fff">+91XXXXXXXXX</Paragraph>
        </AlignItemHorizontally>
        <AlignItemHorizontally mt="30px">
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </AlignItemHorizontally>
        <BottomMenu>
          <BottomSubMenu>
            <Heading left color="#fff">
              Service
            </Heading>
            <SubHeading left color="#fff">
              Products
            </SubHeading>
            <SubHeading left color="#fff">
              Consult an Andvisor
            </SubHeading>
            <SubHeading left color="#fff">
              Ask a question
            </SubHeading>
          </BottomSubMenu>
          <BottomSubMenu>
            <Heading left color="#fff">
              Service
            </Heading>
            <SubHeading left color="#fff">
              Products
            </SubHeading>
            <SubHeading left color="#fff">
              Consult an Andvisor
            </SubHeading>
            <SubHeading left color="#fff">
              Ask a question
            </SubHeading>
          </BottomSubMenu>
        </BottomMenu>
        <Margin mt="20px" />
        <AlignItemCenterHorizontally>
          <Paragraph color="#fff">All rights reserved 2022</Paragraph>
        </AlignItemCenterHorizontally>
      </FooterWrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserAuthenticatedFalse: () => dispatch(setUserAuthenticatedFalse()),
    setUserAuthenticatedTrue: () => dispatch(setUserAuthenticatedTrue()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
