import React from 'react';

import './button.styles.scss';

const Button = ({ children, googleSignIn, ...otherProps }) => (
  <div
    className={`${googleSignIn ? 'google-sign-in' : ''} button`}
    {...otherProps}
  >
    {children}
  </div>
);

export default Button;
