import Styled from 'styled-components';
import style from '../../styles/'
import { dim } from '../../styles/theme';

const fonts = style.fonts;
const colors = style.colors;

const StyledCardOutline = Styled.div `
    align-items: center;
    width: 300px;
    padding: 0;
    border: solid 1px #e8e8e8;
    background-color: #ffffff;
    cursor: pointer;
    box-sizing: border-box;
    border-bottom-right-radius: ${(props) => props.radiusBottom ? props.radiusBottom : 0};
    border-bottom-left-radius: ${(props) => props.radiusBottom ? props.radiusBottom : 0};
    `;

export default StyledCardOutline;