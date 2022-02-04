import React from 'react';
import StyledCardOutline from './card.styles';

const CardOutline = ({children,radiusTop, radiusBottom}) => {
    
    return (
        <StyledCardOutline radiusTop={radiusTop} radiusBottom={radiusBottom}>
           {children}
        </StyledCardOutline>
    )
}

export default CardOutline