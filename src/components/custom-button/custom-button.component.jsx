import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isSignInGoogle, ...otherProps}) => (
    <button className={`${isSignInGoogle? 'sign-in-google' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;