import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import styles from '../../styles';

export const HeaderWrapper = styled.div`
width: 100%;
height: 56px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
background-color: ${styles.colors.secondaryCTA};
`

export const Logo = styled.img`
height: 40px;
width: 40px;
`

export const MenuIcon = styled(FiMenu)`
height: 24px;
width: 24px;
color: ${styles.colors.white};
`