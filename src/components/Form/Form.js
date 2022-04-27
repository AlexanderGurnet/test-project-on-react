import React from 'react';

import Input from '../Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import styles from './Form.module.scss';

const Form = ({ readOnlyState, onSubmit, sortedUser }) => {
  
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {};
    for (let key of e.target) {
      if (key.value) {
        obj[key.id] = key.value;
      }
    }
    const preparedObj = JSON.stringify(obj, null, 2);
    console.log(preparedObj);
  };
  
  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
    >
      <Card className={styles.card}>
        <Input
          readOnly={readOnlyState}
          label="Name"
          id="name"
          type="text"
          valueProp={sortedUser.name}
        />
        <Input
          readOnly={readOnlyState}
          label="User name"
          id="user-name"
          type="text"
          valueProp={sortedUser.username}
        />
        <Input
          readOnly={readOnlyState}
          label="E-mail"
          id="email"
          type="email"
          valueProp={sortedUser.email}
        />
        <Input
          readOnly={readOnlyState}
          label="Street"
          id="street"
          type="text"
          valueProp={sortedUser.address.street}
        />
        <Input
          readOnly={readOnlyState}
          label="City"
          id="city"
          type="text"
          valueProp={sortedUser.address.city}
        />
        <Input
          readOnly={readOnlyState}
          label="Zip code"
          id="zip"
          type="text"
          valueProp={sortedUser.address.zipcode}
        />
        <Input
          readOnly={readOnlyState}
          label="Phone"
          id="phone"
          type="tel"
          valueProp={sortedUser.phone}
        />
        <Input
          readOnly={readOnlyState}
          label="Web site"
          id="site"
          type="text"
          valueProp={sortedUser.website}
        />
        <Input
          readOnly={readOnlyState}
          label="Comment"
          id="comment"
          type="textarea"
        />
      </Card>
      <Button submit disabled={readOnlyState} className={styles.button}>
        Отправить
      </Button>
    </form>
  );
};

export default Form;
