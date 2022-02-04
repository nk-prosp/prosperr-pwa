import styled from "styled-components";
import styles from "../../styles";
import { dim } from "../../styles/theme";
import {
  FiMail,
  FiPhoneCall,
  FiLinkedin,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

export const StyledDiv = styled.div`
  background-color: red;
  color: #fff;
  width: ${dim._scale(120)};
  // width: 120px;
`;

export const BoldHeading = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding: 5px 20px;
`;

export const SubHeading = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  color: ${(props) =>
    props.color ? props.color : styles.colors.subheadingColor};
  /* padding: 0 10px; */
  text-align: ${(props) => (props.left ? "left" : "center")};
`;

export const CoresoulWrapper = styled.div`
  margin: 20px 0 0 0;
  width: 100%;
  height: 240px;
  overflow: hidden;
`;

export const Heading = styled.h2`
  /* padding: 0 10px; */
  text-align: ${(props) => (props.left ? "left" : "center")};
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) =>
    props.lines ? props.lines : 1}; /* number of lines to show */
  line-clamp: ${(props) => (props.lines ? props.lines : 1)};
  -webkit-box-orient: vertical;
  color: ${(props) => (props.color ? props.color : styles.colors.headingColor)};
`;

export const TabWrapper = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const TabText = styled.p`
  font-size: 14px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.isActive ? "#222222" : "#666666")};
  margin: 0px 10px;
  padding: 10px 0px;
  border-bottom: ${(props) => (props.isActive ? "2px" : "0px")} grey solid;
`;

export const Tab = styled.div``;
export const AdvisorContainerWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${styles.colors.backgroundColor};
`;

export const AdvisorCardContainer = styled.div`
  width: 100%;
  background-color: ${styles.colors.white};
`;

export const AdvisorCardContainerInternal = styled.div`
  width: 380px;
  padding: 10px;
  display: flex;
  overflow: scroll;
`;

export const ViewAllAdvisorButton = styled.p`
  font-family: "Open Sans", sans-serif;
  width: 100%;
  text-align: center;
  color: ${styles.colors.primaryCTA};
  background-color: ${styles.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export const TopArticleWrapper = styled.div`
  padding: 25px 10px;
`;

export const TopArticleContainerInternal = styled.div`
  width: 380px;
  padding: 10px;
  display: flex;
  overflow: scroll;
`;

export const SecondaryButton = styled.button`
  border: 0px;
  padding: 10px 20px;
  color: ${styles.colors.white};
  background-color: ${styles.colors.secondaryCTA};
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  width: 200px;
`;

export const AlignItemCenterHorizontally = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrendingTopicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
`;

export const PromoWrapper = styled.div`
  padding: 10px;
`;

export const PromoContainer = styled.div`
  height: 60px;
  background-color: ${styles.colors.lightBlue};
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
`;

export const PromoText = styled.p`
  height: 40px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${styles.colors.white};
  padding: 0 20px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const WhatProsperrDoesWrapper = styled.div`
  margin: 25px 10px;
`;

export const WhatProsperrDoesContent = styled.div`
  padding: 20px;
`;

export const TestimonialWrapper = styled.div`
  background-color: ${styles.colors.secondaryCTA};
  color: ${styles.colors.white};
  padding: 25px 10px;
`;

export const TestimonyConatainer = styled.div`
  padding: 10px;
  display: flex;
  overflow: scroll;
`;

export const FooterWrapper = styled.div`
  background-color: ${styles.colors.darkBlue};
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  margin-top: 5px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  color: ${(props) =>
    props.color ? props.color : styles.colors.subheadingColor};
  margin-right: 5px;
`;

export const EmailInputBox = styled.input`
  background-color: #fff;
  color: grey;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 10px;
  width: 200px;
  border: 0px;
`;

export const MailIcon = styled(FiMail)`
  width: 20px;
  height: 20px;
  color: white;
  margin-right: 10px;
`;

export const CallIcon = styled(FiPhoneCall)`
  width: 20px;
  height: 20px;
  color: white;
  margin-right: 10px;
`;

export const AlignItemHorizontally = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => (props.mt ? props.mt : "10px")};
`;

export const FacebookIcon = styled(FiFacebook)`
  width: 30px;
  height: 30px;
  color: white;
  margin-right: 10px;
`;

export const LinkedInIcon = styled(FiLinkedin)`
  width: 30px;
  height: 30px;
  color: white;
  margin-right: 10px;
`;

export const TwitterIcon = styled(FiTwitter)`
  width: 30px;
  height: 30px;
  color: white;
  margin-right: 10px;
`;

export const BottomMenu = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
`;

export const BottomSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
`;

export const Margin = styled.div`
margin-top: ${props => props.mt?props.mt:'0px'};
margin-bottom: ${props => props.mb?props.mb:'0px'};

`