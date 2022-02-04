import styled from "styled-components";
import styles from "../../styles";

export const OuteWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 240px;
  margin: 10px;
  /* align-items: center; */
`;

export const ImageWrapper = styled.div`
  position: absolute;
  margin-top: 20px;
`;

export const RoundImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  background-color: white;
  padding: 20px 15px 15px 15px;
  border-radius: 20px;
  margin-top: 60px;
`;

export const ContentInternalWrapper = styled.div`
  position: relative;
  padding: 20px 15px 15px 15px;
  border-radius: 20px;
  margin-top: 10px;
`;

export const SubHeading = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) =>
    props.color ? props.color : styles.colors.subheadingColor};
  /* padding: 0 10px; */
  text-align: ${(props) => (props.left ? "left" : "center")};
`;

export const Heading = styled.h2`
  /* padding: 0 10px; */
  color: black;
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
`;

export const Paragraph = styled.p`
  margin-top: 40px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  color: ${styles.colors.subheadingColor};
  margin-right: 5px;
  text-align: justify;
`;

export const QouteIcon = styled.img`
  position: absolute;
  margin-top: 40px;
  width: 80px;
  margin-top: 80px;
  margin-left: 20px;
`;
