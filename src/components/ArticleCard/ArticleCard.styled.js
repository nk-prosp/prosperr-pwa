import styled from "styled-components";
import { dim } from "../../styles/theme";
import { FiCalendar, FiEye } from "react-icons/fi";
import styles from "../../styles";

export const CardWrapper = styled.div`
  margin: ${dim._10px};
  width: 300px;
  display: flex;
  flex-direction: column;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: ${dim._scale(270)};
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const Image = styled.img`
  width: 100%;
  padding: 0%;
  margin: 0%;
  overflow: hidden;
  /* border-radius: 5px; */
`;
export const RoundImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${dim._20px};
`;

export const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${dim._10px};
  border-top: 1px ${styles.colors.borderColor} solid;
`;

export const Heading = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SubHeading = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: ${styles.colors.subheadingColor};
  margin-right: 5px;
`;

export const Paragraph = styled.p`
  margin-top: 5px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  color: ${styles.colors.subheadingColor};
  margin-right: 5px;
`;

export const HorizontalViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`;
export const EyeIcon = styled(FiEye)`
  width: 16px;
  height: 16px;
  color: ${styles.colors.subheadingColor};
`;

export const CalenderIcon = styled(FiCalendar)`
  width: 16px;
  height: 16px;
  color: ${styles.colors.subheadingColor};
`;

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 8px;
  color: ${styles.colors.white};
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  background-color: ${styles.colors.primaryCTA};
  border: 1px ${styles.colors.primaryCTA} solid;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
