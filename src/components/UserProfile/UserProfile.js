import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../UI/Button/Button';
import Loader from '../UI/Loader/Loader';
import Section from '../UI/Section/Section';
import Form from '../Form/Form';
import styles from './UserProfile.module.scss';

const UserProfile = ({ users }) => {
  const [readOnlyState, setReadOnlyState] = useState(true);

  const readOnlyStateHandler = () =>
    setReadOnlyState((prevState) => !prevState);

  const { userId } = useParams();
  const sortedUser = users.find((user) => user.id === +userId);

  return (
    <Section>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Профиль пользователя</h1>
        <Button
          className={styles.headerContainerButton}
          readOnlyStateHandler={readOnlyStateHandler}
        >
          Редактировать
        </Button>
      </div>
      {!sortedUser ? (
        <Loader />
      ) : (
        <Form sortedUser={sortedUser} readOnlyState={readOnlyState} />
      )}
    </Section>
  );
};

export default UserProfile;
