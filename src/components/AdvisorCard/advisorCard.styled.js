import styled from 'styled-components'
import { dim } from '../../styles/theme'
import { FiMapPin } from 'react-icons/fi';
import styles from '../../styles';

export const AdvisorCardWrapper = styled.div`
margin: ${dim._10px};
width: 300px;
display: flex;
flex-direction: column;
/* border-radius: 5px; */
`
export const ImageWrapper = styled.div`
width: 100%;
height: ${dim._scale(220)};
overflow: hidden;
`
export const Image = styled.img`
width: 100%;
padding: 0%;
margin: 0%;
overflow: hidden;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
padding: ${dim._20px};
`
export const Heading = styled.h2`
font-family: 'Open Sans', sans-serif;
font-size: 20px;
font-weight: 500;
`
export const SubHeading = styled.p`
font-family: 'Open Sans', sans-serif;
font-size: 16px;
color: #555555;
`
export const LocationContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
align-items: center;
`
export const LocationIcon = styled(FiMapPin)`
width: 16px;
height: 16px;
color: #555555;
`

export const ActionButton = styled.button`
width: 100%;
padding: 8px;
color: #fff;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
background-color: ${styles.colors.primaryCTA};
border: 1px ${styles.colors.primaryCTA} solid;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
`