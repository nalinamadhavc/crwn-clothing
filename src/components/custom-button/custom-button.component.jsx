import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isSignInGoogle,inverted, ...otherProps}) => (
    <button className={`
    ${inverted? 'inverted' : ''}
    ${isSignInGoogle? 'sign-in-google' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;