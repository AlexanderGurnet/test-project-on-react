import React from 'react';

import styles from './Button.module.scss';

const Button = ({
  children,
  disabled,
  className,
  submit,
  readOnlyStateHandler,
  onClick,
}) => {
  const clickHandler = () => {
    if (readOnlyStateHandler) {
      readOnlyStateHandler();
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={submit ? 'submit' : null}
      disabled={disabled || false}
      className={`${styles.button} ${
        submit ? styles.submit : null
      } ${className}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
