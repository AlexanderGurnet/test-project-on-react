import React, { useState } from 'react';

import styles from './Input.module.scss';

const Input = ({ label, id, type, valueProp, readOnly }) => {
  const [value, setValue] = useState(valueProp || '');

  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {type !== 'textarea' ? (
        <input
          readOnly={readOnly}
          className={`${styles.input} ${readOnly ? styles.read : null}`}
          required
          type={type}
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <textarea
          className={`${styles.textarea} ${readOnly ? styles.read : null}`}
          readOnly={readOnly}
          type={type}
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      )}
    </>
  );
};

export default Input;
