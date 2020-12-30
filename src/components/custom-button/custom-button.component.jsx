import React from 'react';
// import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...otherProps }) => (
    <CustomButtonContainer className='custom-button' {...otherProps}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;